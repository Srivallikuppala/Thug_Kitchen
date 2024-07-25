  import React from 'react'
  import './header.css';
  import { useAuth0 } from "@auth0/auth0-react";
  import styled from "styled-components";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import './marquee.css';
  // import she1 from '../she1.jpg';   
  // function Example() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  const Header = (props) => {

    //const { user, isAuthenticated} = useAuth0();
    let Links=[
      {
        name:'Login',
        path:'./loginform'
      },
      {
        name:'Register',
        path:'./registrationform'
      }
    ];
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
  };
  const [showModal,setShowModal] = useState(false);
    const [open,setOpen] = useState(false)
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow1(false);
    const handleShow3 = () => setShow1(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    const [lgShow1, setLgShow1] = useState(false);
    const [lgShow2, setLgShow2] = useState(false);
    const [lgShow3, setLgShow3] = useState(false);
    const [lgShow4, setLgShow4] = useState(false);
    // const handleClick = () =>{
    //   setShowModal(!showModal);
    // }
    return (
      <div className=" shadow-md w-full static top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-6xl text-red-600 mr-1 pt-2">
              <ion-icon name="fast-food-outline"></ion-icon>
            </span>
            Thug Kitchen
          </div>
          <div className="flex">
            <div className="right-6 top-5 absolute text-3xl cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul className = {`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 tarnsition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity:100`}>
              {
                Links.map((link)=>(
                  <li key={link.name}
                    className="md:ml-8 text-xl md:my-0 my-7">
                    <a className="text-blue-800 hover:text-gray-400 duration-500 cursor-pointer"
                    href={link.path}>{link.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      <Container>
      <Carousel {...settings}>
      <Trap>
      <div  >
          <img src='../sushi.jpg' alt=""/>
        </div>
      </Trap>
      <Trap>
        <div  >
          <img src='../pizza.jpg' alt=""/>
        </div>
      </Trap>

      <Trap>
        <div  >
          <img src="../pan.jpg" alt="pan"/>
        </div>
      </Trap>

      <Trap>
        <div>
          <img src='../fish.jpg' alt="" />
        </div>
      </Trap>

      <Trap>
        <div>
          <img src='../tandoori.jpg' alt="" />
        </div>
      </Trap>
    </Carousel>
    </Container>
    <br/>
    <br/>
    {/* <div className="font-bold text-5xl cursor-pointer font-[Poppins] text-navyblue-800">Our Gallery</div><br/>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 " >
        <Rip><figure><img src='../mar.jpg' alt="" className="img-fluid" />
        <a href="../mar.jpg">Pizza Express Margherita</a></figure>
        </Rip>
        <Rip><figure><img src='../spag.jpg' alt="" />Spaghetti alla Carbonara</figure></Rip>
        <Rip><figure><img src='../cake.jpg' alt="" />Vegan Chocolate Cake</figure></Rip>
        </div>
      <div>
        <br>
        </br>
        <br></br>
      </div> */}
      <div className="pad">
        <h1>
          OUR GALLERY
        </h1>
      <br/>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 " >

          <div className="polaroid ">
            <img   src="../burek.jpg" alt="Kavya"  />
            <div className="lio">
              <h3>Burek</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow1}>
                Show Recipe
              </Button>
              <Modal show={show1} onHide={handleClose1}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>

          <div className="polaroid  ">
            <img src="../burger.jpg" alt="Valli"/>
            <div className="lio">
              <h3>Burger</h3>
              <div>
                <>
                  <Button variant="warning" onClick={handleShow2}> Show Recipe</Button>
                  <Modal show={show2} onHide={handleClose2}
                  size="lg"
                  aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water. To make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt. Work the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves.</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
            </div>
          </div>

          <div className="polaroid ">
            <img  src="../cake.jpg" alt="Valli" />
            <div className="lio">
                  <h3>Northern Lights</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow3}>Show Recipe</Button>
              <Modal show={show3} onHide={handleClose3}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Cake</Modal.Title>
                </Modal.Header>
                <Modal.Body>Simply mix all dry ingredients with wet ingredients and blend altogether. Bake for 45 min on 180 degrees. Decorate with some melted vegan chocolate</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose3}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>

          <div className="polaroid">
            <img  src="../lasagne.jpg" alt="Valli" />
            <div className="lio">
                  <h3>Lasangne</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow4}>Shoe Recipe</Button>
              <Modal show={show4} onHide={handleClose4}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>Mix the lemon juice with the paprika and red onions in a large shallow dish. Slash each chicken thigh three times, then turn them in the juice and set aside for 10 mins. Mix all of the marinade ingredients together and pour over the chicken. Give everything a good mix, then cover and chill for at least 1 hr. This can be done up to a day in advance. Heat the grill. Lift the chicken pieces onto a rack over a baking tray. Brush over a little oil and grill for 8 mins on each side or until lightly charred and completely cooked through.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose4}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>

          <div className="polaroid ">
            <img   src="../coq au vin.jpg" alt="Kavya"  />
            <div className="lio">
              <h3>Coq Au Vin</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow5}>
                Show Recipe
              </Button>
              <Modal show={show5} onHide={handleClose5}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Coq Au Vin</Modal.Title>
                </Modal.Header>
                <Modal.Body>Heat 1 tbsp of the oil in a large, heavy-based saucepan or flameproof dish. Tip in the bacon and fry until crisp. Remove and drain on kitchen paper. Add the shallots to the pan and fry, stirring or shaking the pan often, for 5-8 mins until well browned all over. Remove and set aside with the bacon. Pat the chicken pieces dry with kitchen paper. Pour the remaining oil into the pan, then fry half the chicken pieces, turning regularly, for 5-8 mins until well browned. Remove, then repeat with the remaining chicken. Remove and set aside. Scatter in the garlic and fry briefly, then, with the heat medium-high, pour in the brandy or Cognac, stirring the bottom of the pan to deglaze. The alcohol should sizzle and start to evaporate so there is not much left. Return the chicken legs and thighs to the pan along with any juices, then pour in a little of the wine, stirring the bottom of the pan again. Stir in the rest of the wine, the stock and tomato purée, drop in the bouquet garni, season with pepper and a pinch of salt, then return the bacon and shallots to the pan. Cover, lower the heat to a gentle simmer, add the chicken breasts and cook for 50 mins-1hr. Just before ready to serve, heat the oil for the mushrooms in a large non-stick frying pan. Add the mushrooms and fry over a high heat for a few mins until golden. Remove and keep warm. Lift the chicken, shallots and bacon from the pan and transfer to a warmed serving dish. Remove the bouquet garni. To make the thickener, mix the flour, olive oil and butter in a small bowl using the back of a teaspoon. Bring the wine mixture to a gentle boil, then gradually drop in small pieces of the thickener, whisking each piece in using a wire whisk. Simmer for 1-2 mins. Scatter the mushrooms over the chicken, then pour over the wine sauce. Garnish with chopped parsley.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose5}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>

          <div className="polaroid  ">
            <img src="../eton mess.jpg" alt="Valli"/>
            <div className="lio">
              <h3>Eton Mess</h3>
              <div>
                <>
                  <Button variant="warning" onClick={handleShow6}> Show Recipe</Button>
                  <Modal show={show6} onHide={handleClose6}
                  size="lg"
                  aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration. Whip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using. Spoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose6}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </div>
            </div>
          </div>

          <div className="polaroid ">
            <img  src="../flamiche.jpg" alt="Valli" />
            <div className="lio">
                  <h3>Flamiche</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow7}>Show Recipe</Button>
              <Modal show={show7} onHide={handleClose7}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes. 02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool. 03.Preheat the oven to 200°C/fan180°C/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C/fan170°C/gas 5. 04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose7}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>

          <div className="polaroid">
            <img  src="../kumpir.jpg" alt="Valli" />
            <div className="lio">
                  <h3>Kumpir</h3>
            </div>
            <>
              <Button variant="warning" onClick={handleShow8}>Show Recipe</Button>
              <Modal show={show8} onHide={handleClose8}
              size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                  <Modal.Title>Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer. Grate (roughly – you can use as much as you like) 150g of cheese. Finely chop one onion and one sweet red pepper. Put these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose8}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
          <br/>
        </div>
        <div>
            <h1>
              OUR TEAM
            </h1>
          </div>
          <br/>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 " >
                   
            <button onClick={() => setLgShow1(true)} variant="secondary"><img   src="../21A91A04L8.jpg" alt="Kavya"  /></button>
              <>
              <Modal
                size="mg"
                show={lgShow1}
                onHide={() => setLgShow1(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Srivalli
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="flex justify-center mt-4">
                <img src='../21A91A04L8.jpg' alt="" className="rounded-full object-cover w-4/12 "/>
                Here is Srivalli Kuppala a proficient in frontend architecture .Took an active part in creating Header.js file and few other.
              </div>
              <br/>
                </Modal.Body>
              </Modal>
            </>
            
            <button onClick={() => setLgShow2(true)} variant="secondary"><img   src="../21A91A04L2.jpeg" alt="Kavya"  /></button>
              <>
              <Modal
                size="mg"
                show={lgShow2}
                onHide={() => setLgShow2(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Lekhana Priya
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body> <div className="flex justify-center mt-4">
                <img src='../21A91A04L2.jpeg' alt="" className="rounded-full object-cover w-4/12 "/>
                Here is Killi Lekhana Priya a proficient in frontend architecture .Took an active part in creating Home.js file and few other.
              </div>
              <br/></Modal.Body>
              </Modal>
            </>

            <button onClick={() => setLgShow3(true)} className='polaroids'><img   src="../21A91A04O7.jpg" alt="Kavya"  /></button>
              <>
              <Modal
                size="mg"
                show={lgShow3}
                onHide={() => setLgShow3(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Lakshmi Pavani
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="flex justify-center mt-4">
                <img src='../21A91A04O7.jpg' alt="" className="rounded-full object-cover w-4/12 "/>
                Here is Rongali Lakshmi Pavani a proficient in backend architecture .Took an active part in creating app.js file in backend and few other.
              </div>
              <br/> </Modal.Body>
              </Modal>
            </>

            <button onClick={() => setLgShow4(true)} variant="secondary"><img   src="../21A91A04J3.jpg" alt="Kavya"  /></button>
              <>
              <Modal
                size="mg"
                show={lgShow4}
                onHide={() => setLgShow4(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-sm">
                    Indhu Meghana
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="flex justify-center mt-4">
                <img src='../21A91A04J3.jpg' alt="" className="rounded-full object-cover w-4/12 "/>
                Here is Indhu Meghana Cheekatla a proficient in backend architecture .Took an active part in creating app.js file and few other.
              </div>
              <br/>
                </Modal.Body>
              </Modal>
            </>
          </div>



            {/* <Button onClick={() => setLgShow(true)} variant="warning"><img   src="../spag.jpg" alt="Kavya"  /></Button>
              <>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-mg"
                aria-describedby='Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration. Whip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using. Spoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of'
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-mg">
                    Spaghetti
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body> ... </Modal.Body>
              </Modal>
              
            </> */}
            {/* <button onClick={handleClick} className="shadow-lg p-2 m-2 bg-warning hover:bg-neutral-300 rounded-md"><img src='../sushi.jpg' alt='sushi'/></button>
              
          {showModal ?
          (
            <div className=" fixed inset-0 z-50 overflow-x-hidden overflow-y-auto  items-center">
            <div className="md:w-2/3 mt-24 md:mx-64 w-4/5 bg-white p-2 w-screen rounded-lg">
              <div className="flex justify-center mt-4">
                <img src='../sushi.jpg' alt="" className="rounded-full object-cover w-3/12 "/>
              </div>
              <div className="py-6 m-2">
                <h2 className="text-center">Sushi</h2>
                <h2>Instructions:</h2>
                <p className="text-center text-sm px-2 mt-2">
                Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration. Whip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using. Spoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.
                </p>
                <div class="flex justify-end mt-4">
                  <button onClick={handleClick} className="hover:bg-neutral-300 shadow-lg p-2 rounded-md text-md m-2">Close</button>
                </div>
              </div>
            </div>
            </div>
          ): null} */}
        </div>
        <br/>
        <div>
        <div className="marquee-container">
            <div className="marquee-content">
                <span className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <span className="lil">Copyright @2023TeamSLIP</span>
              <span className="text-6xl text-red-600 mr-1 pt-2">
                <ion-icon name="fast-food-outline"></ion-icon>
              </span>
              Thug Kitchen
            </span>
            </div>
            </div>
        </div>
        <br/>
      </div>
    
    
    )
  }
 

  const Carousel = styled(Slider)`
      & > button {
          opacity: 0;
          height: 100%;
          width: 200px;
          z-index: 1;

          &:hover {
              opacity: 6;
          }
      }

      .slick-list {
          overflow: initial;
      } 

  `
  const Container = styled(Carousel)`
  overflow:hidden;`
  
  const Trap = styled.div`
      border-radius: 4px;
      position: static;

      div{
          border-radius: 5px;
          box-shadow: 
          rgb(0 0 0 / 75%) 0px 30px 30px 10px,
          rgb(0 0 0 / 75%) 0px 10px 10px -10px;
          display: block;
          padding: 5px;

          img {
              height:900px;
              width:1500px;
              padding:30px;
              padding-left:55px;
              padding-right:55px;
          }

          &:hover {
              border: 0px solid ;
          }
      }
  `;

  export default Header;