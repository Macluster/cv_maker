import {
     atom,
 
  } from 'recoil';



  const basicDetailsAtom = atom({
    key:'basicDetailsAtom',
default:{email:''}
 });


  const workExperienceAtom = atom({ key:'workExperienceAtom',default:[] });

  const EducationAtom = atom(  {key:'EducationAtom',default:[]});

  export {basicDetailsAtom,workExperienceAtom,EducationAtom};
  