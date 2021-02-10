import React, {useSelector, useEffect } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { Router } from 'next/dist/client/router';
const Profile = ()=>{
   const followerList =[{ nickname:'오스틴슈'},{nickname:'바오바오'},{nickname:"샤펑즈"}];
   const followingList =[{ nickname:'오스틴슈'},{nickname:'바오바오'},{nickname:"샤펑즈"}];
   const {me} = useSelector((state)=>state.user);
   
   useEffect(()=>{
       if(!(me&&me.id)){
           Router.push('/');
       }
   },[me && me.id]);

   if(!me){
       return null;
   }
   return(
    <>
    <Head>
        <title>내 프로필 | NodeBird</title>
    </Head>
    <AppLayout>       
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>         
    </AppLayout>
    </>
)
};

export default Profile;