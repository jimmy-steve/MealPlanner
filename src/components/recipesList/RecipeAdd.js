import React, { useState } from "react";
import FormAddRecipe from "./FormAddRecipe";
import "./RecipeAdd.scss";

function RecipeAdd(props) {
    const [showAddModal, setShowAddModal] = useState(false);  
  
    const handleAddModalShow = () => {      
      setShowAddModal(true);
    };
  
    const handleAddModalClose = () => {     
      setShowAddModal(false);
    };

    return(
        <div>
            <div className="mt-5">
                <button id="addRecipe" name="addRecipe" type="button" className="btn btn-secondary" onClick={() => handleAddModalShow()}>Ajouter une recette</button>
            </div>
            <div>
                <FormAddRecipe              
                    showAddModal={showAddModal}
                    handleAddModalClose={handleAddModalClose}
                    userId={props.userId}
            />  
        </div>
        </div>

               
    )
}

export default RecipeAdd;