import TextInput from "../../common/TextInput";
import { MenuEquipmentEnum } from "../../enum/menuInsert.enum";
import { useContext, useEffect } from "react";
import { StockContext } from "../../contexts/StockContext";
import StockService from "../../services/StockServices";

interface IsMenuInsertProps {
  id: string;
}

export default function IsMenuInsert({ id }: IsMenuInsertProps) {
  const {
    cases,
    setCases,
    firm,
    setFirm,
    len,
    setLen,
    bigCharge,
    setBigCharge,
    charge,
    setCharge,
    repair,
    setRepair,
    sum,
    setSum,
  } = useContext(StockContext);

  useEffect(() => {
    const major = sessionStorage.getItem("majorEdit");
    if (major) {
      StockService.GetFindStockById(id, major, "อุปกรณ์").then((res) => {
        setCases(res.data.CASES);
        setFirm(res.data.FIRM);
        setLen(res.data.LEN);
        setBigCharge(res.data.BIG_CHARGE);
        setCharge(res.data.CHARGE);
        setRepair(res.data.REPAIR);
        setSum(res.data.SUM);
      });
    }
  }, []);

  return (
    <>
      <TextInput
        label={MenuEquipmentEnum.CASES}
        icon={"fas fa-mobile"}
        setValue={setCases}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"เคส"}
        value={cases}
      />
      <TextInput
        label={MenuEquipmentEnum.FIRM}
        icon={"fas fa-mobile-alt"}
        setValue={setFirm}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"ฟิล์ม"}
        value={firm}
      />
      <TextInput
        label={MenuEquipmentEnum.LEN}
        icon={"fas fa-camera"}
        setValue={setLen}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"กันเลนส์"}
        value={len}
      />
      <TextInput
        label={MenuEquipmentEnum.BIG_CHARGE}
        icon={"fas fa-charging-station"}
        setValue={setBigCharge}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"หัวชาร์จใหญ่"}
        value={bigCharge}
      />
      <TextInput
        label={MenuEquipmentEnum.CHARGE}
        icon={"fas fa-plug"}
        setValue={setCharge}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"สายชาร์จ"}
        value={charge}
      />
      <TextInput
        label={MenuEquipmentEnum.REPAIR}
        icon={"fas fa-tools"}
        setValue={setRepair}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"ซ่อม"}
        value={repair}
      />
      <TextInput
        label={MenuEquipmentEnum.SUM}
        icon={"fas fa-money-bill"}
        setValue={setSum}
        type={"number"}
        min={0}
        minLength={0}
        placeholder={"ราคา"}
        value={sum}
      />
    </>
  );
}
