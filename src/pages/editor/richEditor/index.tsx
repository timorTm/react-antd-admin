import React from 'react';
import styles from './index.module.scss';
interface RichEditorProps{
    
}
const RichEditor:React.FC<RichEditorProps>=(props)=>{
    return <div className={styles.richEditorWrap}>富文本编辑器示例页面</div>
}
export default RichEditor