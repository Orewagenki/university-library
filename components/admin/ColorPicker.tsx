import { HexColorPicker } from "react-colorful"
import { useState} from "react";

interface Props{
  value?: string;
  onPickerChange: (string) => void;
}

const ColorPicker = ({value, onPickerChange} : Props) => {
  const [color,setColor] = useState("#aabbcc");
const [isOpen, setIsOpen] = useState(false);
  
  return <HexColorPicker color ={color}
           onChange={setColor} />;
};

export default ColorPicker;
