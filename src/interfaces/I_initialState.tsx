import { I_motKhoaHoc } from "./I_quanLyKhoaHoc";
import { I_dangNhap, I_nguoiDung, I_thongTinNguoiDung, I_userLogin } from "./I_quanLyNguoiDung";

interface I_quanLyKhoaHoc {
    danhSachKhoaHoc: I_motKhoaHoc[];
}

interface I_quanLyNguoiDung {
    userLogin: I_userLogin;
    isPageDangNhap: boolean;
    autofill: I_dangNhap | null;
    danhSachNguoiDung: I_nguoiDung[];
    thongTinNguoiDung: I_thongTinNguoiDung | null;
}

interface I_initialState {
    quanLyKhoaHocSlice: I_quanLyKhoaHoc;
    quanLyNguoiDungSlice: I_quanLyNguoiDung;
}

export default I_initialState;
