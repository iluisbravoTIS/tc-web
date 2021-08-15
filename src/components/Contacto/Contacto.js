import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from '@material-ui/core';

const Styles = styled.div`
    @import url(//db.onlinewebfonts.com/c/541a90bdc678feccd01df7c0a267b5c4?family=Berkahi+Blackletter);
    
    @font-face {font-family: "Berkahi Blackletter"; 
    src: url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.eot");
     src: url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.eot?#iefix") 
     format("embedded-opentype"),
     url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.woff2") format("woff2"), 
     url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.woff") format("woff"), 
     url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.ttf") format("truetype"), 
     url("//db.onlinewebfonts.com/t/541a90bdc678feccd01df7c0a267b5c4.svg#Berkahi Blackletter") format("svg"); }
    
    .chilos{
        font-family: "Berkahi Blackletter";
        margin-top: auto;
        font-size: 150px;
        padding-top: 15px;
        padding-right: 0px;
        color: #E4CBB9;
    }

    .height100{         
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }

    .fontTittle{
        font-size: 150px;
    }

    .divText{
        height: 200px;
        witdth: 500px;
    }
    .iconoProp{
        background-color: #000000;

    }
    .marginCard{
        margin-left: 200px;
    }
    .MuiTypography-root{
        font-family: "Caviar Dreams";
    }
    .MuiPaper-elevation1{
        box-shadow:none
    }
    .divSeparator{
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top:2px;
        margin-bottom:2px;
    }
`;


const Contacto = () => {

    return (
        <>
            <Styles>
                <div class="height100" id="Contacto">
                    <div class="divSeparator bg-dark"></div>
                    <div class="bg-dark divText">
                        <h1 class="text-center chilos">chilos</h1>
                    </div>
                    <div class="divSeparator bg-dark"></div>
                    <Card>
                        <CardHeader
                            titleTypographyProps={{variant:'h4' }}
                            title="Contáctanos:"
                        />
                    </Card>
                    <Card className="body">
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" >
                                    <InstagramIcon/>
                                </Avatar>
                            }
                            titleTypographyProps={{variant:'h6' }}
                            title="Instagram"
                            subheaderTypographyProps={{variant:'h6' }}
                            subheader= {<Link href={"https://www.instagram.com/cactusboytattoo"} target="_blank">@cactusboytattoo</Link>}
                        />
                    </Card>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" >
                                    <MailOutlineIcon />
                                </Avatar>
                            }
                            titleTypographyProps={{variant:'h6' }}
                            title="Email"
                            subheaderTypographyProps={{variant:'h6' }}
                            subheader= {<Link href={"mailto:info@tatuajeschilos.com"}>info@tatuajeschilos.com</Link>}
                        />
                    </Card>
                    {/* <Grid container>
                        <Grid item xs={1}>
                            <InstagramIcon className="iconoProp" />
                        </Grid>
                        <Grid item xs={11}>
                            <h4>Instagram</h4>
                        </Grid>
                        <Grid item>
                            <h4>instagram.com/cactusboytattoo</h4>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1}>
                            <MailOutlineIcon className="iconoProp" />
                        </Grid>
                        <Grid item xs={11}>
                            <p>Email</p>
                        </Grid>
                        <Grid item class="offset-md-1">
                            <p>info@tatuajeschilos.com</p>
                        </Grid>
                    </Grid> */}

                    {/* <Grid container spacing={8}>
                        <Grid item xs={12} >
                            <InstagramIcon className="iconoProp" />
                        </Grid>
                        <Grid item xs={12}>
                            <MailOutlineIcon className="iconoProp"/>
                        </Grid>
                    </Grid> */}
                </div>
            </Styles>
        </>
    )
}

export default Contacto;