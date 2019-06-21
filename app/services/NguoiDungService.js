function NguoiDungService(){
    this.mangNguoiDung=[];

    this.LayDanhSachNguoiDung=function(){
        return $.ajax({//cú pháp  ajax
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung',
            type:'GET'

        })//trả về nguyên cục ajax luôn
        // .done(function(data){
        //     //thành công thì nhận dữ liệu trả về nên có tham sô
            
        //     this.mangNguoiDung=data;
        //     console.log(this.mangNguoiDung);//chỉ có trong hàm done mới có dữ liệu bị bất đồng bộ ,ajax chạy sau vị lỡ bị mất mạng
        //     // TaoBang(this.mangNguoiDung);
        // })
        // .fail(function(err){
        //     console.log(err);
            
        // })
        
        
    }

    this.ThemNguoiDung=function(nguoiDung){
        $.ajax({
            url:'http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung',
            type:'POST',
            data:nguoiDung
        }).done(function(data){
            console.log(data);
            if(data=='tai khoan da ton tai !'){
                alert(data);
            }else{
                // thêm thành công cho trang tự động f5
                location.reload();
            }
            
        }).fail(function(err){
            console.log(err);
            
        })
    }
    console.log(this.mangNguoiDung);
    this.XoaNguoiDung=function(taiKhoan){
        $.ajax({
            // url:'http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/'+taiKhoan,
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type:'DELETE'
            // 2 cách truyền 1 là trên url 2 là body


        }).done(function(data){
            console.log(data);
            
                // thêm thành công cho trang tự động f5
                location.reload();
                //xóa bị trùng 1s
            
        }).fail(function(err){
            console.log(err);
            
        })

    }



    this.LayThongTinNguoiDung=function(taiKhoan){
        /** 
         * 1.lấy danh sách người dùng từ localStorage
         * 2.duyệt mảng bằng find->return về người dùng tìm thấy
        */


    }

    this.CapNhatNguoiDung=function(nguoiDung){//cục người dùng là json phải chuyển về string
        var nd=JSON.stringify(nguoiDung);
        $.ajax({
            url:`http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatNguoiDung`,//TRUYỀN LÊN CHO BACKEND LÀ BODY NÊN K CÓ THAM SÔ
            type:'PUT',
            data:nd,
            // mặc định là text phải chuyển qua json application
            contentType:'application/json',//post put phải có
            dataType:'json'
        }).done(function(data){
            console.log(data);
            
                // thêm thành công cho trang tự động f5
                location.reload();
                //xóa bị trùng 1s
            
        }).fail(function(err){
            console.log(err);
            
        })
    }


}
