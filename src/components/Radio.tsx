import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { ControllerRenderProps } from "react-hook-form";

interface RadiosProps {
    radios: string[];
    r: string;
    field: ControllerRenderProps;
}

const Radio=({radios,r,field}:RadiosProps) =>{
  return (
    <RadioGroup onValueChange={field.onChange}>
        {
            radios.map((radio,idx) => (
            <div className="flex items-center gap-3" id={`${r}${idx}`} key={`${r}${idx}`}>
                <RadioGroupItem value={radio} id={`${r}${idx}`} />
                <Label htmlFor={`${r}${idx}`}>{radio}</Label>
            </div>
            ))
        }
    </RadioGroup>
  )
}
export default Radio
