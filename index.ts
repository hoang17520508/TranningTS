console.log("hello typescript 123");
//var let const
// scope
// -var:function scope
//-let :block scope
//hoisting
//-var:bị hoisting
//let consy:cũng bị hoisting ,nhưng bị đưa vào vùng nhhwos chết  ko  thể sử dụng dc chỉ có thể truy cập sau khi khai báo
 

//IIFE function:là mootjfunctionn dc khoeir tạo và thực thi ngya tại thời điểm khởi tạo
for (var i=0;i<5;i++){
    (function(i){
        setTimeout(function(){
        console.log("đếm",i)
        },1000);

    })(i)
}
//type
let userName: string='';
userName="hekmet";
let score:number=8;
// score= '8' báo lỗi
let isActive:boolean=true;
// array
let number:number[]=[1,2,3];
let alphas:Array<string>=["â","â","dasdas"];     

//tuple
let tuple1: [string,number]=["diemToan",8];
//Enum   :read only
enum Color{
    white="#ffff",
    black="#000",
    red="#f00"


}

let n:null=null;
let  u:undefined=undefined;
console.log(Color.white);
console.log(typeof(n));   
console.log(typeof({}));
let result:number|string=5;
result="aaaasaaaaa";
//any //có thế gán bất kì 
let result2:any=5;

// void 
function foo():string{
    return "aa";

}
function foo1():void{
    console.log("void");
}

interface SinhVien{
    hoTen:string
    tuoi?:number//optional
    lop:string
}

const sinhVien:SinhVien={
    hoTen:"dan",
    tuoi:25,
    lop:"fe54"
};
sinhVien.lop="111111111121";
let data={};
//falsy value:null undifine 0 '' false


//optional chaining:TS version>= 3.7
// data?.lichchieu?.map();

//nullish coslescing chỉ kiểm tra null hoặc undefine    
let diemToan=0;
let ketQua=diemToan || 'N/A';
let ketQua1=diemToan ?? 'N/A';
console.log(ketQua);
console.log(ketQua1);
//generic
function getResult<T>(value:T):T{
    return value;
}
let res=getResult<string>("hello");
let res1=getResult<number>(1);


class NhanVien{
    protected hoTen:string;
    protected tuoi:number;
    protected gioiTinh:string;
    constructor(hoTen:string,tuoi:number,gioTinh:string){
        this.hoTen=hoTen;
        this.tuoi=tuoi;
        this.gioiTinh=gioTinh;
    }
    tinhLuong():number{
        return 1000;
    }
}
class GiamDoc extends NhanVien{
    heSoLuong:number
    constructor( hoten:string,
         tuoi:number,
        gioiTinh:string,
        heSoLuong:number
        )
        {
            super(hoten,tuoi,gioiTinh);
            this.heSoLuong=heSoLuong;
        }
        tinhLuong():number{
            return super.tinhLuong()*this.heSoLuong;
        }
        gettuoi(){
            return this.tuoi;
        }

  

}
const giamDoc=new GiamDoc("hoaaaa",22,"nam",3);
console.log(giamDoc.tinhLuong());
console.log(giamDoc.gettuoi());
interface iNhanVien{
    hoten:string;
    tuoi:number;
    tinhLuong():number;

}
interface IThietKe{
    readonly chucDanh:string;//không thể thay đổi
    thucHienCongViec():void;
}
class NhanVienThietKe implements iNhanVien,IThietKe{
    hoten:string;
    tuoi:number;
    chucDanh:string;
    constructor(hoTen:string,tuoi:number,chucDanh:string){
        this.hoten=hoTen;
        this.tuoi=tuoi;
        this.chucDanh=chucDanh;
        
    }
    tinhLuong():number{
        return 110000;
    }
    thucHienCongViec():void{
        console.log("thiet ke noi thất");
    }   
    

}
//dom 
const txtname=<HTMLInputElement>document.getElementById('txtName');
    
const btn=<HTMLButtonElement>document.getElementById('submit');

