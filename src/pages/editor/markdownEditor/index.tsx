import React from 'react';
import styles from './index.module.scss';
interface MarkDownEditorProps{
    
}
const MarkDownEditor:React.FC<MarkDownEditorProps>=(props)=>{
    return <div className={styles.markDownEditorWrap}>markdown文本编辑器示例页面</div>
}
export default MarkDownEditor