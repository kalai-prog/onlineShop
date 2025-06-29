import "../styles/language.css"

function Language() {
  return (
    <div>
    <div className="languages">
      <input type="radio" id="tamil" name="language"/>
      <label for="tamil">Tamil </label> <br/>
       </div>
      <div className="languages">
      <input type="radio" id="english" name="language"/>
      <label for="english">English</label> <br/>
      </div>
      <div className="languages">
      <input type="radio" id="hindi" name="language"/>
      <label for="hindi">Hindi</label> <br/>
      </div>
      <div className="languages">
      <input type="radio" id="malayalam" name="language"/>
      <label for="malayalam">Malayalam</label> <br/>
      </div>
      <div className="languages">
      <input type="radio" id="telungu" name="language"/>
      <label for="telungu">Telungu</label> <br/>
      </div>
      <div className="languages">
      <input type="radio" id="marati" name="language"/>
      <label for="marati">Marati</label> <br/>
      </div>
      <div className="languages">
      <input type="radio" id="gujarati" name="language"/>
      <label for="gujarati">Gujarati</label> <br/>
      </div>
      <button>Continue</button>
   
    </div>
  )
}

export default Language
