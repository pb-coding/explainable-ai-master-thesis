import React, { useRef } from 'react';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { groups } from '../utils/utils';

const Register = ({setCode, setGroup}) => {

    const navigate = useNavigate()

    const codeInputRef = useRef(null)

    const assignGroup = (code) => {
        switch (code.charAt(0)) {
            case "u" || "U":
                setGroup(groups.INPUT_TEXTUAL)
                return true;
            case "v" || "V":
                setGroup(groups.INPUT_VISUAL)
                return true;
            case "w" || "W":
                setGroup(groups.INPUT_HYBRID)
                return true;
            case "x" || "X":
                setGroup(groups.SENSITIVITY_TEXTUAL)
                return true;
            case "y" || "Y":
                setGroup(groups.SENSITIVITY_VISUAL)
                return true;
            case "z" || "Z":
                setGroup(groups.SENSITIVITY_HYBRID)
                return true;
            default:
                return false;
        }
    }

    const checkAndSaveCode = () => {
        //register()
        const code = codeInputRef.current.value;
        

        const groupAssignedSuccess = assignGroup(code);
        if (!groupAssignedSuccess) {
            alert("Der eingegebene Code ist ungültig. Bitte überprüfen Sie Ihre Eingabe.")
            return;
        }

        setCode(code);
        navigate("/");
    }

    function register() {
        output.innerText = "";
        //document.getElementById("vp_instructions").style.display = "block";
        var input_value = document.getElementById("vp_code").value;
        var first = input_value.charAt(0);
        var regex_x = RegExp(/^(x|X)[a-zA-Z]{3}\d{2}$/);
        var regex_t = RegExp(/^(t|T)[a-zA-Z]{3}\d{2}$/);
        console.log(input_value);
        console.log(first);
    
        
        if (first == "") {
            output.innerText = "Fehler: leeres Feld.";
            return;
        }
        if (input_value.length != 6) {
            output.innerText = "Fehler: Der VP-Code muss 6 Stellen lang sein.";
            return;
        }
        if (regex_x.test(input_value)) {
            isX = true;
            document.getElementById("vp_code_box").style.display = "none";
            document.getElementById("vp_instructions").style.display = "none";
            createText(text_intro, false, 0);
            return;
        }
        if (regex_t.test(input_value)) {
            isT = true;
            document.getElementById("vp_code_box").style.display = "none";
            document.getElementById("vp_instructions").style.display = "none";
            createText(text_intro, false, 0);
            return;
        }
        output.innerText = "Fehler: Code ungültig.";
    }

    

    return(
        <div className="flex items-center justify-center h-screen bg-slate-300">
            <div className="max-w-sm">
                <Card>
                    <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="vp_code"
                            value="Bitte hier den Versuchspersonencode eingeben:"
                        />
                        </div>
                        <TextInput
                            id="vp_code"
                            ref={codeInputRef}
                            type="code"
                            placeholder="VP-Code"
                            required={true}
                        />
                    </div>
                    <Button onClick={() => checkAndSaveCode()}>
                        Login
                    </Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}
export default Register;

