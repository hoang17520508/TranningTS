"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello typescript 123");
//var let const
// scope
// -var:function scope
//-let :block scope
//hoisting
//-var:bị hoisting
//let consy:cũng bị hoisting ,nhưng bị đưa vào vùng nhhwos chết  ko  thể sử dụng dc chỉ có thể truy cập sau khi khai báo
//IIFE function:là mootjfunctionn dc khoeir tạo và thực thi ngya tại thời điểm khởi tạo
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("đếm", i);
        }, 1000);
    })(i);
}
//type
var userName = '';
userName = "hekmet";
var score = 8;
// score= '8' báo lỗi
var isActive = true;
// array
var number = [1, 2, 3];
var alphas = ["â", "â", "dasdas"];
//tuple
var tuple1 = ["diemToan", 8];
//Enum   :read only
var Color;
(function (Color) {
    Color["white"] = "#ffff";
    Color["black"] = "#000";
    Color["red"] = "#f00";
})(Color || (Color = {}));
var n = null;
var u = undefined;
console.log(Color.white);
console.log(typeof (n));
console.log(typeof ({}));
var result = 5;
result = "aaaasaaaaa";
//any //có thế gán bất kì 
var result2 = 5;
// void 
function foo() {
    return "aa";
}
function foo1() {
    console.log("void");
}
var sinhVien = {
    hoTen: "dan",
    tuoi: 25,
    lop: "fe54"
};
sinhVien.lop = "111111111121";
var data = {};
//falsy value:null undifine 0 '' false
//optional chaining:TS version>= 3.7
// data?.lichchieu?.map();
//nullish coslescing chỉ kiểm tra null hoặc undefine    
var diemToan = 0;
var ketQua = diemToan || 'N/A';
var ketQua1 = diemToan !== null && diemToan !== void 0 ? diemToan : 'N/A';
console.log(ketQua);
console.log(ketQua1);
//generic
function getResult(value) {
    return value;
}
var res = getResult("hello");
var res1 = getResult(1);
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, tuoi, gioTinh) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.gioiTinh = gioTinh;
    }
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoten, tuoi, gioiTinh, heSoLuong) {
        var _this = _super.call(this, hoten, tuoi, gioiTinh) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    GiamDoc.prototype.gettuoi = function () {
        return this.tuoi;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc("hoaaaa", 22, "nam", 3);
console.log(giamDoc.tinhLuong());
console.log(giamDoc.gettuoi());
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(hoTen, tuoi, chucDanh) {
        this.hoten = hoTen;
        this.tuoi = tuoi;
        this.chucDanh = chucDanh;
    }
    NhanVienThietKe.prototype.tinhLuong = function () {
        return 110000;
    };
    NhanVienThietKe.prototype.thucHienCongViec = function () {
        console.log("thiet ke noi thất");
    };
    return NhanVienThietKe;
}());
//dom 
var txtname = document.getElementById('txtName');
var btn = document.getElementById('submit');
