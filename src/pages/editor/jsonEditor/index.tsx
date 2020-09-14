import React from 'react';
import styles from './index.module.scss';
interface JsonEditorProps{
    
}
const JsonEditor:React.FC<JsonEditorProps>=(props)=>{
    return <div className={styles.jsonEditorWrap}>json文本编辑器示例页面</div>
}
export default JsonEditor