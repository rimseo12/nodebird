import React from 'react';
import PropTyes from 'prop-types';
import {List, Button, Card} from 'antd';
import {StopOutlined} from '@ant-design/icons';

const FollowList = ({header, data})=>{
 return(
     <List
     style={{marginBottom:20}}
     grid={{gutter:4, xs:2, md:3}}
     header={<div>{header}</div>}
     loadMore={<div style={{textAlign:'center', margin:'10px 0'}}><Button>더 보기</Button></div>}
     bordered
     dataSource={data}
     renderItem={(item)=>(
         <List.Item style={{marginTop:20}}>
          <Card action={[<StopOutlined key="stop"/>]}>
             <Card.Meta description={item.nickname}/>
          </Card>
         </List.Item>
     )}

     />
 );
}

FollowList.propTyes ={
    header: PropTyes.string.isRequired,
    data: PropTyes.array.isRequried,
}


export default FollowList;