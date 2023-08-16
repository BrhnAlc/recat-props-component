
import './App.css';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';

function App() {
  return (
    <div className="App">
   <h2>Giriş Formu</h2>
   
   <Form>
   <Input type={"text"} placeHolder={"Kullanıcı Adı"}/>
   <Input type={"password"} placeHolder={"Şifreniz"}/>
   <Button/>
   </Form>
    </div>
  );
}

export default App;
