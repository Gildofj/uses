import { useEffect, useState } from "react";

export default function ShowOutOfUseEquipments() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("showOutOfUseEquipments");
    if (saved === "true") {
      setShow(true);
    }
  }, []);

  const showOutOfUseEquipments = () => {
    const newValue = !show;
    setShow(newValue);
    localStorage.setItem("showOutOfUseEquipments", newValue.toString());
  };

  return (
    <button
      onClick={showOutOfUseEquipments}
      className="flex items-center justify-center"
    >
      {show ? "- Show less" : "+ Show more"}
    </button>
  );
}
