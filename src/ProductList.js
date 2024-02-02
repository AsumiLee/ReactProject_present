import { Link } from 'react-router-dom'
import styles from './ProductList.module.css'
import { useState } from 'react' //ReactHook 
import Title from './Title'

export default function ProductList() {

    let productList= [
        {"id": 1, "name": "Hi-Gold SKG-004SP", "price" : 1188 , "image" : "id1.jpg", "description" : "硬式內野右投用紅色" },
        {"id": 2, "name": "XANAX BHG23WB1S", "price" : 1260 , "image" : "id2.jpg", "description" : "硬式內野右投用紅色" },
        {"id": 3, "name": "SSK AKT8445L23", "price" : 1367, "image" : "id3.jpg", "description" : "硬式 T TYPE 內野右投用橘色" },
        {"id": 4, "name": "ZETT BPGB25210", "price" : 1385 , "image" : "id4.jpg", "description" : "硬式 VL 內野右投用黑色" },
        {"id": 5, "name": "ATOMS AGL-1003", "price" : 1536 , "image" : "id5.jpg", "description" : "日本製 硬式內野右投用橘色" },
        {"id": 6, "name": "MIZUNO 1AJGA29513", "price" : 1908, "image" : "id6.jpg", "description" : "硬式 H Selection SIGNA GA9 內野右投用紅色" }
    ]

    //let product = 'Glove'
    /* const [product,setProduct] = useState('Glove') */

    /* const [ShowProduct, setShowProduct] = useState(false) */
    /* const handleClick = ()=>{
        setProduct('react')
        console.log(product)
    } */


  return (
    <div>
        {/* {ShowProduct && <button onClick={()=>{setShowProduct(false)}}>hide products</button>}
        {!ShowProduct && <button onClick={()=>{setShowProduct(true)}}>show product</button>} */}
      {/*   {product} <button onClick={handleClick}>change vaules</button> */}
        <Title mainTitle="Choose Your Glove" /* subTitle="90%OFF!!!"  *//>
      <div>
        {
            /* ShowProduct &&  */productList.map(product=>(
                <div className={styles.proudctBorder} key={product.id}>
                    {product.name}<br/>
                    {product.price}<br/>
                    <Link to={'/product_details/' +product.id}>
                        <img src={process.env.PUBLIC_URL+'/img/'+product.image} />
                    </Link>
                    {product.description}<br/>
                </div>
            ))
        }
      </div>
    </div>
  )
}
