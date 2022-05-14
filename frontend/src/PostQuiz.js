import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    field: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        display: "block"

    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
    detailTitle: {
        textDecoration: 'underline'
    }
}));

const currencies = ["1", "2", "3", "4", "5", "6", "7"];



function PostQuiz() {





    const [currency, setCurrency] = useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const classes = useStyles();
    const [Question, setQuestion] = useState("");
    const [correctAnswer, setcorrectAnswer] = useState("");
    const [wrongAns1, setwrongAns1] = useState("");
    const [wrongAns2, setwrongAns2] = useState("");
    const [wrongAns3, setwrongAns3] = useState("");
    // const [jobList, setJobList] = useState([]);
    const [QuestionError, setQuestionError] = useState(false);
    const [correctAnswerError, setcorrectAnswerError] = useState(false);
    const [wrongAns1Error, setwrongAns1Error] = useState(false);
    const [wrongAns2Error, setwrongAns2Error] = useState(false);
    const [wrongAns3Error, setwrongAns3Error] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuestionError(false)
        setcorrectAnswerError(false)
        setwrongAns1Error(false)
        setwrongAns2Error(false)
        setwrongAns3Error(false)
        // setjobTypeError(false);

        if (Question == "")
            setQuestionError(true)
        if (correctAnswer == "")
            setcorrectAnswer(true)
        if (wrongAns1 == "")
            setwrongAns1Error(true)
        if (wrongAns2 == "")
            setwrongAns2Error(true)
        if (wrongAns3 == "")
            setwrongAns3Error(true)

    }

    return (
        <Container>
            <Box m={2} pt={3}>

                <Typography
                    variant="h5"
                    className={classes.detailTitle}
                    gutterBottom
                    color="secondary"
                    align="center"
                    component="h2"
                >Add Question for Quiz </Typography></Box>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>


                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select number of  questions"
                >
                    {currencies.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField className={classes.field}
                    onChange={(e) => setQuestion(e.target.value)}
                    label="Question"
                    variant="outlined"
                    colour="secondary"
                    fullWidth
                    required
                    error={QuestionError}
                />

                <TextField className={classes.field}
                    onChange={(e) => setcorrectAnswer(e.target.value)}
                    label="Correct Answer"
                    variant="outlined"
                    colour="textSecondary"
                    fullWidth
                    required
                    error={correctAnswerError}
                />

                <TextField className={classes.field}
                    onChange={(e) => setwrongAns1(e.target.value)}
                    label="Wrong Answer"
                    variant="outlined"
                    colour="textSecondary"
                    fullWidth
                    required
                    error={wrongAns1Error}
                />


                <TextField className={classes.field}
                    onChange={(e) => setwrongAns2(e.target.value)}
                    label="Wrong Answer"
                    variant="outlined"
                    colour="textSecondary"
                    fullWidth
                    required
                    error={wrongAns2Error}
                />

                <TextField className={classes.field}
                    onChange={(e) => setwrongAns3(e.target.value)}
                    label="Wrong Answer"
                    variant="outlined"
                    colour="textSecondary"
                    fullWidth
                    required
                    error={wrongAns3Error}
                />


                <Button
                    type="submit"
                    size="large"
                    classes={{
                        root: classes.root,
                        label: classes.label,
                    }}
                    startIcon={<AddCircleIcon />}
                // onClick={careerSubmitHandler}
                >
                    Add Question
                </Button>
            </form>
        </Container>
    )
}

export default PostQuiz