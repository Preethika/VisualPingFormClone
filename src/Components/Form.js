import React, { useState } from 'react';
import { Paper, InputBase, Divider, Button, IconButton, TextareaAutosize, TextField, Accordion, AccordionSummary, AccordionDetails, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Select, Container, InputAdornment, OutlinedInput } from '@material-ui/core';
import { MenuIcon, SearchIcon, DirectionsIcon, CircularProgress } from '@material-ui/icons';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.css';

function Form() {
    const [ key, setKey ] = useState(1);
    const [ email, setEmail]  = useState({ value: '', error: null });

    const updateKey = (e, key) => {
        setKey(key);
    }
    const validateEmail = (e) => {
        const _email = e.target.value;
        const regEx = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        const res = regEx.test(String(_email).toLowerCase());
        
        if (res) {
            setEmail({ value: _email, error: null })
        } else {
            setEmail({ value: _email, error: 'Not a valid email' })
        }
    }

    return (
        <>
            <br />
            <br />

            <Divider />
            <Container maxWidth="md">
                <br />
                <Paper component="form">
                    <FormControl variant="outlined" fullWidth>

                        <InputLabel htmlFor="outlined-adornment-password">Enter Website www.google.com</InputLabel>

                        <OutlinedInput
                            id="outlined-adornment-password"
                            value={email.value}
                            error={email.error}
                            onChange={validateEmail}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained" color="primary"
                                        aria-label="toggle password visibility"
                                        //   onClick={handleClickShowPassword}
                                        //   onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        style={{ height: '45px' }}
                                    >
                                        GO
                                        </Button>
                                </InputAdornment>
                            }
                            labelWidth={230}
                        />

                    </FormControl>

                    <br /><br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Result"
                        multiline fullWidth
                        rows={10}
                        // defaultValue="Default Value"
                        variant="outlined"
                    />
                    <br /><br />

                    {/* Advanced */}
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="heading">Advanced</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="advancedContent">
                                <RadioGroup row aria-label="compare" name="compare1"
                                // value={value} onChange={handleChange}
                                >
                                    <FormControlLabel value="Visual" control={<Radio color="primary" selected />} label="Visual" />
                                    <FormControlLabel value="Text" control={<Radio color="primary" />} label="Text" />
                                    <FormControlLabel value="Element" control={<Radio color="primary" />} label="Element" />
                                    {/* <ErrorOutlineTwoToneIcon color=""/> */}
                                </RadioGroup>

                                <FormControl variant="outlined"
                                    style={{ marginRight: '10px', marginBottom: '10px' }}>
                                    <InputLabel id="demo-simple-select-outlined-label">    Area   </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="Area"
                                        autowidth
                                    >
                                        <MenuItem value={10}>Area</MenuItem>
                                        <MenuItem value={20}>All page</MenuItem>
                                        <MenuItem value={30}>Mobile</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }}>
                                    <InputLabel id="demo-simple-select-outlined-label">No Proxy</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="proxy"
                                        autowidth
                                    >
                                        <MenuItem value={10}>None</MenuItem>
                                        <MenuItem value={20}>Basic</MenuItem>
                                        <MenuItem value={30}>35.212.158.228</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl variant="outlined" style={{ marginRight: '10px', marginBottom: '10px' }}>
                                    <InputLabel id="demo-simple-select-outlined-label">Tiny change</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // value={age}
                                        // onChange={handleChange}
                                        label="proxy"
                                        autowidth
                                    >
                                        <MenuItem value={10}>Any change</MenuItem>
                                        <MenuItem value={20}>Tiny change</MenuItem>
                                        <MenuItem value={30}>Medium</MenuItem>
                                        <MenuItem value={40}>Major</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </AccordionDetails>
                    </Accordion>


                    <br /><br />
                    <Paper>
                        <ul className="tabs">
                            <li onClick={(e) => this.updateKey(e, 1)}>
                                {key === 1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                <span>Perform actions </span>
                            </li>
                            <li onClick={(e) => this.updateKey(e, 2)}>
                                {key === 2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                <span>Keyword alert</span>
                            </li>
                            <li onClick={(e) => this.updateKey(e, 3)}>
                                {key === 3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                <span>Browser adjustment</span>
                            </li>
                        </ul>
                        <div className="tabContent">
                            {key === 1 && <div>Perform actions content
                                <br />
                                <br />
                                <TextField fullWidth placeholder="Actions"
                                    variant="outlined" /></div>}
                            {key === 2 && <div>Keyword alert content <br />
                                <br />
                                <TextField fullWidth placeholder="Keywords"
                                    variant="outlined" /></div>}
                            {key === 3 && <div>Browser adjustment content
                                <br />
                                <br />
                                <TextField fullWidth placeholder="Adjustment details"
                                    variant="outlined" /></div>}
                        </div>
                    </Paper>
                    <br /><br />

                    <Button variant="contained" color="primary" fullWidth
                        style={{ height: '50px' }}> START MONITORING! </Button>
                    <br /><br />
                </Paper>
            </Container>
        </>
    );
}


export default Form;