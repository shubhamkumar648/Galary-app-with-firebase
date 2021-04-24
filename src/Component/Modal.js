const Modal = ({selectImage,setselectedImage}) => {


    return (

        <div class="backdrop"  onClick={(event)=> {event.target.classList.contains('backdrop') && setselectedImage(null)}}>
    
    <img src={selectImage} alt= "large "/>
         
        </div>
    )

}

export default Modal