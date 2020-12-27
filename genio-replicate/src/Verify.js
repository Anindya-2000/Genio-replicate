import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import {
    useParams
} from "react-router-dom";
import axios from 'axios'

const Verify = ({ params }) => {
    let { id } = useParams();
    useEffect(() => {
        const auth = () => {
            var data1 = JSON.stringify({ "username": "Shashwat", "password": "GenioKaPassword" });

            var config = {
                method: 'post',
                url: 'https://get-out-2z27nzutoq-el.a.run.app/getToken',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data1
            };
            var token = ''
            axios(config).then(async (response) => {
                token = response.data.token
                axios({
                    method: 'post',
                    url: 'https://get-out-2z27nzutoq-el.a.run.app/authentication/' + `?token=${response.data.token}`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                        "uid": id,
                    })
                }).then(async (response) => {
                    // console.log(response.data)
                })

            })
        }
        auth()
    })

    return (
        <div>
            <center>
                <img style={{ width: 270, height: 270, marginTop: 40 }} src={'https://d5c8j8afeo6fv.cloudfront.net/verified.gif'} />
                <p style={{ fontSize: 19, fontFamily: 'Montserrat', marginTop: -10 }}>Your email has been verified, you can now close this webpage</p>
                <Button onClick={() => window.location.replace("https://link.genio.app/verify")} variant="contained" style={{ width: 200, borderRadius: 2, backgroundColor: '#3A5AFF', color: 'white', fontFamily: 'Montserrat', textTransform: 'none', height: 50, fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Take me to the app</Button>
            </center>
        </div>
    )

}

export default Verify;