import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";

export interface I_video {
    title: string;
    video_url: string;
    duration: string;
}
export interface I_chuongHoc {
    title: string;
    videos: I_video[];
}
export interface I_danhMucKhoaHoc {
    _id: string;
    tenDanhMuc: string;
}
export interface I_motKhoaHoc {
    _id: string;
    tenKhoaHoc: string;
    moTa: string;
    ngayTao: string;
    soLuongHocVien: number;
    luotXem: number;
    giaTien: number;
    seHocDuoc: string[];
    chuongHoc: I_chuongHoc[];
    hinhAnh: string;
    danhMucKhoaHoc_ID: I_danhMucKhoaHoc;
}

export interface I_PropContentCourse {
    khoaHoc: I_motKhoaHoc | undefined;
    totalDuration: string;
}

export interface file {
    file: {
        originFileObj: RcFile;
    };
}

export interface I_valuesKhoahoc {
    _id: string;
    tenKhoaHoc: string;
    moTa: string;
    ngayTao: string;
    soLuongHocVien: number;
    luotXem: number;
    giaTien: number;
    seHocDuoc: string[];
    chuongHoc: I_chuongHoc[];
    hinhAnh: file;
    danhMucKhoaHoc_ID: I_danhMucKhoaHoc;
}

export interface I_itemSearch {
    _id: string;
    tenKhoaHoc: string;
    hinhAnh: string;
}

export type I_resultSearch = I_itemSearch[] | [];

export interface I_khoaHocTheoDanhMuc {
    tenDanhMuc: string;
    khoaHocDanhMuc: I_khoaHocDanhMuc[];
}

export interface I_khoaHocDanhMuc {
    _id: string;
    tenKhoaHoc: string;
    hinhAnh: string;
    danhMucKhoaHoc_ID: I_danhMucKhoaHocId;
}

export interface I_danhMucKhoaHocId {
    _id: string;
    tenDanhMuc: string;
}

export interface I_thongTinNguoiDungChoKhoaHoc {
    khoaHoc: I_khoaHoc;
    nguoiDungDaDangKy: I_nguoiDungDaDangKy[];
    nguoiDungChuaDangKy: I_nguoiDungChuaDangKy[];
}

export interface I_khoaHoc {
    _id: string;
    tenKhoaHoc: string;
    hinhAnh: string;
}

export interface I_nguoiDungDaDangKy {
    _id: string;
    taiKhoan: string;
    email: string;
    soDt: string;
    hoTen: string;
    avatar: string;
    maLoaiNguoiDung: string;
}

export interface I_nguoiDungChuaDangKy {
    _id: string;
    taiKhoan: string;
    email: string;
    soDt: string;
    hoTen: string;
    avatar: string;
    maLoaiNguoiDung: string;
}

export interface I_PropsCta {
    title: string;
    desc: string;
    textBtn: string;
}
