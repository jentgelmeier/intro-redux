import { connect } from "react-redux";
import NewItemForm from "../components/NewItemForm";
import { addNewItem } from "../store/items/actions"

// use action binders
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//   {
//     onSubmit: (name, price) => addNewItem(name, price)
//   },
//   dispatch
//  );
// }

//use dispatch explicity
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   }
// }

//simplest syntax
const mapDispatchToProps = {
    onSubmit: (name, price) => addNewItem(name, price)
}

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm)