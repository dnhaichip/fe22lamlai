//đảm bảo trang index được render ra hết
$(document).ready(function(){
    var nguoiDungService=new NguoiDungService();
    GetDanhSachNguoiDung();
    //đom đến nút thêm nút để mở pop
    $('#btnThemNguoiDung').click(function(){
        $('.modal-title').html('Thêm Người Dùng');
        var footer=`
            <button id='btnThem' class='btn btn-success'>Thêm</button>
        `;
        $('.modal-footer').html(footer);
    })

    //thêm người dùng mới
    $('body').delegate('#btnThem','click',function(){
        var taikhoan=$('#TaiKhoan').val();
        var HoTen=$('#HoTen').val();
        var MatKhau=$('#MatKhau').val();
        var Email=$('#Email').val();
        var SoDienThoai=$('#SoDienThoai').val();
        var loaiNguoiDung=$('#loaiNguoiDung').val();  
        var nguoiDung=new NguoiDung(taikhoan,HoTen,MatKhau,Email,SoDienThoai,loaiNguoiDung);
        //thêm cho thằng back-end
        // console.log(nguoiDung);
        nguoiDungService.ThemNguoiDung(nguoiDung);
        

    })

    //xóa người dùng
    $('body').delegate('.btnXoa','click',function(){
        var taiKhoan=$(this).data('taikhoan');
        console.log(taiKhoan);
        nguoiDungService.XoaNguoiDung(taiKhoan);


    })
    $('body').delegate('.btnSua','click',function(){
        $('.modal-title').html('Sửa Người Dùng');
        var footer=`
            <button  class='btn btn-success' id='btnCapNhat'>Cập Nhật</button>
        `;
        $('.modal-footer').html(footer);

        var taiKhoan=$(this).data('taikhoan');
       var nguoiDung= nguoiDungService.LayThongTinNguoiDung(taikhoan);

       /**
        * dom đén 6 ô imput cập nhật lại dữ liệu từ biến người dùng
        */

    })
    //câp nhật người dùng

    $('body').delegate('#btnCapNhat','click',function(){
        /**
         * lấy dữ liệu từ 6 ô input
         * gọi đến phương thức  cập nhật người dùng
         */

    })

    function GetDanhSachNguoiDung(){
        nguoiDungService.LayDanhSachNguoiDung().done(function(data){
            // nguoiDungService.mangNguoiDung=data;

            // lưu xuống local 
            localStorage.setItem('DSND', JSON.stringify( data));
            TaoBang(data);

        }).fail(function(err){
            console.log(err);
            
        });
        console.log(nguoiDungService.mangNguoiDung);
        
    }
    function TaoBang(mang){
        //phải có mảng trước đã
    
        var content='';
    
        mang.map(function(item,index){
    
            content += `
                <tr>
                    <td>${index+1}</td>
                    <td>${item.TaiKhoan}</td>
                    <td>${item.MatKhau}</td>
                    <td>${item.HoTen}</td>
                    <td>${item.Email}</td>
                    <td>${item.SoDT}</td>
                    <td>${item.TenLoaiNguoiDung}</td>
                    <td>
                        <button  class='btn btn-primary btnSua' data-toggle="modal" data-target="#myModal" data-taikhoan='${item.TaiKhoan}'>Sửa</button>
                        <button  class='btn btn-danger   btnXoa'  data-taikhoan='${item.TaiKhoan}' >Xóa</button>
                    </td>
                </tr>
            
            `;
    
        });
    
        $('#tblDanhSachNguoiDung').html(content);
    }
 

})