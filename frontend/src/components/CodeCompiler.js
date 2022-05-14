import React, { useState } from "react";
import {
    Grid,
    Container,
    Box,
    Typography,
    Button,
    Paper,
    TextField,
    TextareaAutosize,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";
import Header from "./Header"
import SendIcon from "@mui/icons-material/Send";
function CodeCompiler() {
    const [code, setCode] = useState("")
    const [language, setLanguage] = useState("")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState({})
    const getOutput = async (e) => {
        e.preventDefault();

        // const {name, email, phone, work, password, cpassword} = user;
        const res = await fetch("/codecompiler", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code, language, input
            })

        })
        const data = await res.json();

        if (res.status == 200) {
            setOutput(data.message.output)
            return console.log("Barobar hai :", data, "output: ", output);
        } else {
            // dispatch({ type: "USER", payload: true })
            // console.log(data)
            // setOutput(data)
            console.log("Error Occured");
            // window.alert("Login Successful");
            // const notiftoast =()=> toast.success('Login Successful', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     });
            //     notiftoast();
            // history.push("/")
        }

    }

    return (
        <>
            <Header />
            <Grid style={{ marginTop: "80px" }} display="flex" ml={20} mt={6}>
                <Grid Container>
                    <Grid item xs={12}>
                        <Typography mb={2}>
                            <Button variant="contained">Code Here</Button>
                        </Typography>
                        <TextareaAutosize
                            value={code}
                            aria-label="minimum height"
                            minRows={20}
                            placeholder="// Enter your code"
                            style={{ width: "150%" }}
                            onChange={(e) => { setCode(e.target.value); console.log(code) }}
                        />
                        <Grid display="flex">
                            <Button size="small" variant="contained" onClick={getOutput} endIcon={<SendIcon />}>
                                Run
                            </Button>
                            <Grid display="flex" alignItems="center" ml={2}>
                                <Typography pt={2} sx={{ fontWeight: "bold" }}>
                                    Language:
                                </Typography>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={language}
                                        onChange={(e) => {
                                            setLanguage(e.target.value);
                                            console.log(language)
                                            // if (language === "cpp") {
                                            //     setCode('#include <iostream> using namespace std; int main() cout<<"Hello World"; return 0;} ');
                                            //     console.log("code")
                                            // }
                                        }}
                                        label="Language"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="c">C</MenuItem>
                                        <MenuItem value="cpp">C++</MenuItem>
                                        <MenuItem value="cs">C#</MenuItem>
                                        <MenuItem value="java">Java</MenuItem>
                                        <MenuItem value="py">Python</MenuItem>
                                        <MenuItem value="rb">Ruby</MenuItem>
                                        <MenuItem value="kt">Kotlin</MenuItem>
                                        <MenuItem value="swift">Swift</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid mt={3} item>
                        <Typography mb={2}>
                            <Button variant="contained">User Input</Button>
                        </Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={10}
                            placeholder="// Take Input"
                            style={{ width: "150%" }}
                            value={input}
                            onChange={(e) => { setInput(e.target.value); console.log(input) }}
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item xs={12} ml={22} item>
                        <Typography mb={2}>
                            <Button variant="contained">Output</Button>
                        </Typography>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={40}
                            placeholder="// Output"
                            value={output}
                            style={{ width: "250%" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default CodeCompiler;