import React, { useState, useEffect } from 'react';
import Name from '../../public/logo-name.png';
import { useForm } from 'react-hook-form';
import {
    Avatar,
    Button,
    Typography,
    TextField,
    Stepper,
    Step,
    StepLabel,
    Grid,
    AppBar,
    Toolbar,
    Paper,
    Container,
    Box,
    MenuItem,
    InputAdornment,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "tss-react/mui";
import {
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";

import { NumericFormat } from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));



function getSteps() {
    return [
        "First Verification",
        "Second Verification",
    ];
}
const FirstVerification = () => {
    const { control } = useFormContext();
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="age"
                        render={({ field }) => (
                            <TextField
                                id="age"
                                label="Tuổi"
                                variant="outlined"
                                placeholder="Tuổi của bạn là bao nhiêu?"
                                fullWidth
                                helperText="VD: Nhập 20 nếu bạn năm nay 20 tuổi."
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controller
                        control={control}
                        name="educationLevel"
                        render={({ field }) => (
                            <TextField
                                id="educationLevel"
                                label="Trình độ học vấn"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={20}>Trên Đại Học</MenuItem>
                                <MenuItem value={15}>Đại Học/Cao Đẳng</MenuItem>
                                <MenuItem value={5}>Trung Học</MenuItem>
                                <MenuItem value={-5}>Dưới Trung Học/Thất Học</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="job"
                        render={({ field }) => (
                            <TextField
                                id="job"
                                label="Nghề nghiệp thuộc nhóm nào?"
                                variant="outlined"
                                placeholder="Nghề nghiệp hiện nay của bạn là gì?"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={25}>Chuyên môn/Kỹ thuật</MenuItem>
                                <MenuItem value={15}>Cán bộ/Công chức nhà nước</MenuItem>
                                <MenuItem value={5}>Kinh doanh</MenuItem>
                                <MenuItem value={0}>Nghỉ Hưu/Chưa có công việc</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="experienceYear"
                        render={({ field }) => (
                            <TextField
                                id="experienceYear"
                                label="Bạn đã có kinh nghiệm làm việc bao lâu?"
                                variant="outlined"
                                placeholder="Bạn đã có kinh nghiệm làm việc bao lâu?"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={5}>Dưới 6 tháng</MenuItem>
                                <MenuItem value={10}>Từ 6 tháng đến 1 năm</MenuItem>
                                <MenuItem value={15}>Từ 1 năm đến 5 năm</MenuItem>
                                <MenuItem value={20}>Trên 5 năm</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="timeWorked"
                        render={({ field }) => (
                            <TextField
                                id="job"
                                label="Thời gian đang làm công việc hiện tại?"
                                variant="outlined"
                                placeholder="Thời gian đã làm công việc hiện tại?"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={5}>Dưới 6 tháng</MenuItem>
                                <MenuItem value={10}>Từ 6 tháng đến 1 năm</MenuItem>
                                <MenuItem value={15}>Từ 1 năm đến 5 năm</MenuItem>
                                <MenuItem value={20}>Trên 5 năm</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>

            </Grid>
        </>
    );
};

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref,
) {
    const { onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            valueIsNumericString
        />
    );
});

NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const SecondVerification = () => {
    const { control } = useFormContext();
    const [values, setValues] = React.useState({
        numberformat: '1320',
      });
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="incomeOfaYear"
                        render={({ field }) => (
                            <TextField
                                id="incomeOfaYear"
                                label="Thu nhập cá nhân hằng năm?"
                                helperText="Nhập đúng số tiền.VD: Thu nhập là 10 triệu thì nhập 10000000"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">VNĐ</InputAdornment>,
                                    inputComponent: NumericFormatCustom,
                                }}
                                
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="yourIncomeFamilyOfaYear"
                        render={({ field }) => (
                            <TextField
                                id="yourIncomeFamilyOfaYear"
                                label="Thu nhập của cả  gia đình trên năm?"
                                helperText="Nhập đúng số tiền.VD: Thu nhập là 10 triệu thì nhập 10000000"
                                variant="outlined"
                                fullWidth
                                placeholder='Thu nhập của cả  gia đình trên năm?'
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">VNĐ</InputAdornment>,
                                    inputComponent: NumericFormatCustom,
                                }}
                                margin="normal"
                                {...field}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="houseStatus"
                        render={({ field }) => (
                            <TextField
                                id="houseStatus"
                                label="Tình trạng nhà ở của bạn?"
                                variant="outlined"
                                placeholder="Tình trạng nhà ở của bạn?"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={30}>Sở hữu nhà riêng</MenuItem>
                                <MenuItem value={12}>Ở nhà thuê</MenuItem>
                                <MenuItem value={5}>Ở chung với người thân</MenuItem>
                                <MenuItem value={0}>Khác</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="familyStructure"
                        render={({ field }) => (
                            <TextField
                                id="familyStructure"
                                label="Cơ cấu gia đình?"
                                variant="outlined"
                                placeholder="Cơ cấu gia đình?"
                                fullWidth
                                margin="normal"
                                select
                                {...field}
                            >
                                <MenuItem value={20}>Sống 1 mình</MenuItem>
                                <MenuItem value={5}>Sống với cha mẹ</MenuItem>
                                <MenuItem value={0}>Sống cùng 1 gia đình khác</MenuItem>
                                <MenuItem value={-5}>Sống cùng một số gia đình khác</MenuItem>
                            </TextField>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name="peopleManage"
                        render={({ field }) => (
                            <TextField
                                id="peopleManage"
                                label="Số người cần được nuôi dưỡng?"
                                variant="outlined"
                                placeholder="Số người cần được nuôi dưỡng?"
                                helperText="Nhập đúng số người.VD: 3 người thì nhập 3. Nếu tự nuôi bản thân thì nhập 1"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">Người</InputAdornment>,
                                }}
                                fullWidth
                                margin="normal"

                                {...field}
                            />
                        )}
                    />
                </Grid>

            </Grid>
        </>
    );
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <FirstVerification />;
        case 1:
            return <SecondVerification />;
        default:
            return "unknown step";
    }
}

const Home = () => {
    const {
        user: { displayName, photoURL, auth, email },
    } = useContext(AuthContext);

    const classes = useStyles();
    const methods = useForm({
        defaultValues: {
            age: "",
            educationLevel: "",
            job: "",
            timeWorked: "",
            experienceYear: "",
            houseStatus: "",
            familyStructure: "",
            peopleManage: "",
            incomeOfaYear: "",
            yourIncomeFamilyOfaYear: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = (data) => {
        console.log(data);
        if (activeStep == steps.length - 1) {
            setActiveStep(activeStep + 1);
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // const onSubmit = (data) => {
    //   console.log(data);
    // };


    const handleLogout = () => {
        auth.signOut();
    };

    const [checked, setChecked] = useState(false);
    const [disabledbtn, setDisabledbtn] = useState(true);

    useEffect(() => {
        if (checked) {
            setDisabledbtn(false);
        } else {
            setDisabledbtn(true);
        }
    }, [checked]);

    let getAge;
    if (parseInt(methods.getValues("age")) > 18 && parseInt(methods.getValues("age")) <= 25) {
        getAge = 5
    } else if (parseInt(methods.getValues("age")) > 25 && parseInt(methods.getValues("age")) <= 40) {
        getAge = 15
    } else if (parseInt(methods.getValues("age")) > 40 && parseInt(methods.getValues("age")) <= 60) {
        getAge = 20
    } else if (parseInt(methods.getValues("age")) > 60) {
        getAge = 10
    }


    let getPeopleManage
    if (parseInt(methods.getValues("peopleManage")) == 1) {
        getPeopleManage = 0
    } else if (parseInt(methods.getValues("peopleManage")) > 1 && parseInt(methods.getValues("peopleManage")) <= 3) {
        getPeopleManage = 10
    } else if (parseInt(methods.getValues("peopleManage")) > 3 && parseInt(methods.getValues("peopleManage")) <= 5) {
        getPeopleManage = 5
    } else if (parseInt(methods.getValues("peopleManage")) > 5) {
        getPeopleManage = -5
    }


    let getIncomeOfaYear
    if (parseInt(methods.getValues("incomeOfaYear")) < 12000000) {
        getIncomeOfaYear = -5
    } else if (parseInt(methods.getValues("incomeOfaYear")) >= 12000000 && parseInt(methods.getValues("incomeOfaYear")) < 36000000) {
        getIncomeOfaYear = 15
    } else if (parseInt(methods.getValues("incomeOfaYear")) >= 36000000 && parseInt(methods.getValues("incomeOfaYear")) < 120000000) {
        getIncomeOfaYear = 30
    } else if (parseInt(methods.getValues("incomeOfaYear")) > 120000000) {
        getIncomeOfaYear = 40
    }


    let getYourIncomeFamilyOfaYear
    if (parseInt(methods.getValues("yourIncomeFamilyOfaYear")) < 24000000) {
        getYourIncomeFamilyOfaYear = -5
    } else if (parseInt(methods.getValues("yourIncomeFamilyOfaYear")) >= 24000000 && parseInt(methods.getValues("yourIncomeFamilyOfaYear")) < 72000000) {
        getYourIncomeFamilyOfaYear = 15
    } else if (parseInt(methods.getValues("yourIncomeFamilyOfaYear")) >= 72000000 && parseInt(methods.getValues("yourIncomeFamilyOfaYear")) < 240000000) {
        getYourIncomeFamilyOfaYear = 30
    } else if (parseInt(methods.getValues("yourIncomeFamilyOfaYear")) > 240000000) {
        getYourIncomeFamilyOfaYear = 40
    }

    const score = getAge + parseInt(methods.getValues("educationLevel")) + parseInt(methods.getValues("job")) + parseInt(methods.getValues("timeWorked")) + parseInt(methods.getValues("experienceYear")) + parseInt(methods.getValues("houseStatus")) + parseInt(methods.getValues("familyStructure")) + getPeopleManage + getIncomeOfaYear + getYourIncomeFamilyOfaYear;
    let level;
    if (score >= 201) {
        level = "A";
    } else if (score >= 161 && score <= 200) {
        level = "B";
    } else if (score >= 131 && score <= 160) {
        level = "C";
    } else if (score >= 81 && score <= 130) {
        level = "D";
    } else if (score >= 65 && score <= 80) {
        level = "E";
    } else if (score < 65) {
        level = "F";
    }
    return (
        <div>
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={Name} alt="" width={200} />
                    <Button color="error" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 5, md: 3 }, width: '500px' }}>
                    <Typography component="h1" variant="h4" align="center" marginBottom="40px" marginTop="20px">
                        Credit score system
                    </Typography>


                    <Stepper alternativeLabel activeStep={activeStep}
                        sx={{ marginBottom: '20px' }}
                    >
                        {steps.map((step, index) => {
                            const labelProps = {};
                            const stepProps = {};
                            return (
                                <Step {...stepProps} key={index}>
                                    <StepLabel {...labelProps}>{step}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {activeStep === steps.length ? (

                        <div sx={{ width: '1000px' }}>
                            <Avatar
                                alt='avatar'
                                src={photoURL}
                                sx={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Typography variant="h6" align="center" sx={{ marginTop: '20px' }}>
                                Thank you, {displayName}, for completing the verification.
                            </Typography>
                            <Typography variant="h6" align="left" sx={{ marginTop: '30px' }}>
                                Số điểm của bạn theo hệ thống chúng tôi tính toán được là <span style={{ fontWeight: '700' }}>{score}</span>.
                            </Typography>
                            <Typography variant="h6" align="left">
                                Bạn đang ở mức tín dụng <span style={{ fontWeight: '700' }}>{level}</span>.
                            </Typography>
                            <Typography variant="h6" align="left">
                                Kết quả về khoản vay BNPL của bạn thì chúng tôi sẽ kiểm duyệt và thông báo qua mail của bạn là <span style={{ fontWeight: '700' }}>{email}</span>
                            </Typography>
                        </div>

                    ) : (
                        <>
                            <Avatar
                                alt='avatar'
                                src={photoURL}
                                sx={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}
                            />
                            <Typography component="h3" variant="h5" align="center" marginBottom="30px" marginTop="10px">
                                Hello, {displayName}
                            </Typography>
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(handleNext)}>
                                    {getStepContent(activeStep)}

                                    {activeStep === 0 ? null : (
                                        <Grid item xs={12} sx={{ marginTop: '40px' }}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="secondary"
                                                        name="saveAddress"
                                                        value="yes"
                                                        checked={checked}
                                                        onChange={(event) => setChecked(event.target.checked)}
                                                    />
                                                }
                                                label="Cam kết thông tin trên là đúng sự thật và chịu hoàn toàn trách nhiệm trước quy định pháp luật."
                                            />
                                        </Grid>
                                    )}

                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                        <Button
                                            className={classes.button}
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ marginRight: '10px' }}
                                        >
                                            back
                                        </Button>
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            disabled={activeStep === steps.length - 1 ? disabledbtn : false}
                                        >
                                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                        </Button>
                                    </Box>
                                </form>
                            </FormProvider>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Home;