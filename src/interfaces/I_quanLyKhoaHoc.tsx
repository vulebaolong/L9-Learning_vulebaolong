export interface I_video {
    title: string;
    video_url: string;
    duration: string;
}
export interface I_chuongHoc {
    title: string;
    videos: I_video[];
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
}
export interface I_PropCollapseCourse {
    khoaHoc: I_motKhoaHoc | undefined;
}
