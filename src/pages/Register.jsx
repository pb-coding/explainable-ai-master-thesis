import React, { useState } from 'react';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { groups } from '../utils/utils';
import { useSearchParams } from 'react-router-dom';

const Register = ({setGroup}) => {

    const navigate = useNavigate()
    const [queryParams] = useSearchParams();

    const [errorMessage, setErrorMessage] = useState(null);

    const assignGroup = (groupNumber) => {
        switch (groupNumber) {
            case "1":
                setGroup(groups.INPUT_TEXTUAL)
                return true;
            case "2":
                setGroup(groups.INPUT_VISUAL)
                return true;
            case "3":
                setGroup(groups.INPUT_HYBRID)
                return true;
            case "4":
                setGroup(groups.SENSITIVITY_TEXTUAL)
                return true;
            case "5":
                setGroup(groups.SENSITIVITY_VISUAL)
                return true;
            case "6":
                setGroup(groups.SENSITIVITY_HYBRID)
                return true;
            default:
                return false;
        }
    }

    const showError = () => {
        setErrorMessage("Etwas hat nicht funktioniert. Bitte gehen Sie zurück zur Umfrage und klicken Sie auf den Link.");
    }


    const checkAndSaveGroup = () => {

        const group = queryParams.get("g");
        console.log(group)

        if (!group || group == "") {
            showError()
            return;
        }

        const groupAssignedSuccess = assignGroup(group);
        
        if (!groupAssignedSuccess) {
            showError()
            return;
        }
        
        navigate("/");
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
                                    value="Wenn du bereit bist, klicke auf Start."
                                />
                            </div>
                            {errorMessage && (
                                <div className="text-red-500">
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        <Button onClick={() => checkAndSaveGroup()}>
                            Start
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}
export default Register;

