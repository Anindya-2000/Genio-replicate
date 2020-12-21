import { Dropdown } from 'bootstrap';
import React from 'react';
import {useState,setState} from 'react';
import './Drawer.css';


const Drawer = (props) =>{
    const rotateDivs = () =>{
        const div1 = document.getElementsByClassName("stick-1")[0];
        const div2 = document.getElementsByClassName("stick-2")[0];
        const div3 = document.getElementsByClassName("stick-3")[0];
        if(props.isOpen){
            props.setIsOpen(false);
            div2.style.display = "block";
            div1.classList.remove('rotate-cc');
            div3.classList.remove('rotate-c');
            props.DropDown(0);
        }
        else{
            props.setIsOpen(true);
            div2.style.display = "none";
            div1.classList.add('rotate-cc');
            div3.classList.add('rotate-c');
            props.DropDown(1);
        }     
    }

    const handleOutsideClick = () =>{
        const div1 = document.getElementsByClassName("stick-1")[0];
        const div2 = document.getElementsByClassName("stick-2")[0];
        const div3 = document.getElementsByClassName("stick-3")[0];
        if(props.isOpen){
            props.setIsOpen(false);
            div2.style.display = "block";
            div1.classList.remove('rotate-cc');
            div3.classList.remove('rotate-c');
        }   
    }

    return (
    <div>
        <a href = "#" style = {{"position":"relative"}}>
            <div onClick = {()=>rotateDivs()} className = "container" tabIndex="0" onBlur={ ()=>handleOutsideClick() }>
                <div className = "stick stick-1"></div>
                <div className = "stick stick-2"></div>
                <div className = "stick stick-3"></div>
            </div>
        </a>
    </div>
    );
}

export default Drawer;