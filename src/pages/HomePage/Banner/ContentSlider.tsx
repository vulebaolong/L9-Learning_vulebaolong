import Button from "../../../components/Button/Button";

interface I_dataContent {
    h2: string;
    p: string;
    colorBackground: string;
    colorTextBtn: string;
    img: string;
    textBtn: string;
}

type Props = {
    dataContent: I_dataContent;
};

function ContentSlider({ dataContent }: Props) {
    return (
        <div className={`grid grid-cols-2 rounded-2xl w-full ${dataContent.colorBackground}`}>
            <div className="flex items-center">
                <div className="pl-10">
                    <h2 className="text-3xl font-bold text-white mb-2">{dataContent.h2}</h2>
                    <p className="text-white mb-6 ">{dataContent.p}</p>
                    <Button className="group" type="transparent">
                        <span className={`${dataContent.colorTextBtn} text-white transition font-bold`}>{dataContent.textBtn}</span>
                    </Button>
                </div>
            </div>
            <div className="w-full h-[270px]">
                <img className="w-full h-[270px] object-cover" src={dataContent.img} alt="" />
            </div>
        </div>
    );
}
export default ContentSlider;
