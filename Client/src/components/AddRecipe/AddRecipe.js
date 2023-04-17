 import React,{Fragment,useState} from 'react'
 import "./../../styles/main.scss";
 import Icons from "../../img/icons.svg";




 const AddRecipe =(props)=>{
    const[title, setEntEredTitle]=useState('')
        const[sourceUrl, setEnteredUrl]=useState('')
        const[image, setEnteredImUrl]=useState('')
        const[publisher, setEnteredPublisher]=useState('')
        const[cookingTime, setEnteredPrepTime]=useState('')
        const[servings, setEnteredServings]=useState('')
        const[enteredIng1, setEnteredIng1]=useState('')
        const[enteredIng2, setEnteredIng2]=useState('')
        const[enteredIng3, setEnteredIng3]=useState('')
        const[enteredIng4, setEnteredIng4]=useState('')
        const[enteredIng5, setEnteredIng5]=useState('')
        const[enteredIng6, setEnteredIng6]=useState('')
        const [Msg, setMsg] = useState("");
       const TitleHandler=(event)=>{setEntEredTitle(event.target.value)  }
       const UrlHandler=(event)=>{setEnteredUrl(event.target.value)  }
       const ImgUrlHandler=(event)=>{setEnteredImUrl(event.target.value)  }
       const PublisherlHandler=(event)=>{setEnteredPublisher(event.target.value)}
       const PrepTimelHandler=(event)=>{setEnteredPrepTime(event.target.value)}
       const ServingsHandler=(event)=>{setEnteredServings(event.target.value)}
       
       const Ingredient1Handler=(event)=>{setEnteredIng1(event.target.value)}
       const Ingredient2Handler=(event)=>{setEnteredIng2(event.target.value)}
       const Ingredient3Handler=(event)=>{setEnteredIng3(event.target.value)}
       const Ingredient4Handler=(event)=>{setEnteredIng4(event.target.value)}
       const Ingredient5Handler=(event)=>{setEnteredIng5(event.target.value)}
       const Ingredient6Handler=(event)=>{setEnteredIng6(event.target.value)}
    const UploadHandler=async(event)=> {event.preventDefault()
        
      const userGenerated=true
      const ingredients=[]
      ingredients.push(enteredIng1,enteredIng2,enteredIng3,enteredIng4,enteredIng5,enteredIng6)
      if(title==="" || publisher==="" || servings==='' || image==='' || cookingTime==='' ||sourceUrl===''){ 
        setMsg('All fields in Recipe Data section has to be filled')
      } else{
      console.log(ingredients)
    await fetch('/api/recipes', {
      method: 'POST',
       body: JSON.stringify({ userGenerated, title, publisher, sourceUrl, image, servings, cookingTime, ingredients }),
        headers: { 'Content-Type': 'application/json' },})
    
    setEntEredTitle('')
     setEnteredUrl('')
    setEnteredImUrl('')
    setEnteredPublisher('')
    setEnteredPrepTime('')
    setEnteredServings('')
    setEnteredIng1('')
    setEnteredIng2('')
    setEnteredIng3('')
    setEnteredIng4('')
    setEnteredIng5('')
    setEnteredIng6('')
    alert("Your recipe has been successfully added")
    props.hide()
     }
    }
    const closeWindow=()=>{
        props.hide()  
    }

    return (
        <Fragment>
        <div className="overlay "></div>
        <div className="add-recipe-window ">
          <button  onClick ={closeWindow} className="btn--close-modal">&times;</button>
          <form className="upload">
            <div className="upload__column">
              <h3 className="upload__heading">Recipe data</h3>
              <label>Title</label>
              <input type="text" onChange={TitleHandler} value={title} required name="title"  />
              <label>URL</label>
              <input onChange={UrlHandler} value={sourceUrl} required name="sourceUrl" type="text" />
              <label>Image URL</label>
              <input onChange={ImgUrlHandler} value={image} required name="image" type="text" />
              <label>Publisher</label>
              <input onChange={PublisherlHandler} value={publisher} required name="publisher" type="text" />
              <label>Prep time</label>
              <input onChange={PrepTimelHandler}value={cookingTime} required name="cookingTime" type="number" />
              <label>Servings</label>
              <input onChange={ServingsHandler}value={servings} required name="servings" type="number" />
            </div>
    
            <div className="upload__column">
              <h3 className="upload__heading">Ingredients</h3>
              <label>Ingredient 1</label>
              <input
                onChange={Ingredient1Handler}value={enteredIng1}
                type="text"
                required
                name="ingredient-1"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 2</label>
              <input
                onChange={Ingredient2Handler}value={enteredIng2}
                type="text"
                name="ingredient-2"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 3</label>
              <input
                onChange={Ingredient3Handler}value={enteredIng3}
                type="text"
                name="ingredient-3"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 4</label>
              <input
              onChange={Ingredient4Handler}value={enteredIng4}
                type="text"
                name="ingredient-4"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 5</label>
              <input
              onChange={Ingredient5Handler}value={enteredIng5}
                type="text"
                name="ingredient-5"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
              <label>Ingredient 6</label>
              <input
              onChange={Ingredient6Handler}value={enteredIng6}
                type="text"
                name="ingredient-6"
                placeholder="Format: 'Quantity,Unit,Description'"
              />
            </div>
            <h2 >{Msg}</h2>
            <button className="btn upload__btn" onClick={UploadHandler}>
              <svg>
              <use xlinkHref={`${Icons}#icon-upload-cloud`}></use>
              </svg>
              <span>Upload</span>
            </button>
          </form>
        </div>
    </Fragment>)
 }
 export default AddRecipe