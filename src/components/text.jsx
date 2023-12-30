export const Text =({
    style,
    clickFunc,
    value
})=>{
    return(
        <h6 className={style} onClick={clickFunc}>{value}</h6>
    )
}