import React, {useState} from 'react'
import productrue from './assets/clarifion1.webp'
import '@radix-ui/react-icons'
import stock from './assets/stockindi.png'
import chulo from './assets/chulito.png'
import percentage from './assets/percent.png'
import { Avatar, Box, Flex, Heading, HoverCard, Link, Text } from '@radix-ui/themes'
import arrowsito from './assets/rightarrow.png'
import line from './assets/line.png'
import padlock from './assets/padlock.png'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import card4 from './assets/card4.png'
import card5 from './assets/card5.png'
import card6 from './assets/card6.png'
import card7 from './assets/card7.png'
import refound from './assets/guaratee.png'
import Modal from './Modal';
import './index.css'

const DecorativeBoxtwo = () => {

    const [modalOpen, setModalOpen] = useState(false);
  
    const handleAccept = () => {
      // Lógica para aceptar la oferta
      // Aquí puedes realizar las acciones que necesites
      setModalOpen(false);
    };

    const handleModalClose = () => {
      setModalOpen(false); // Cierra el modal si se hace clic fuera de él
    };

  return (
    <div className='deboxtw'>
        <div className='frameq'>
        <p className='secondtitle'><b className='code'>ONE TIME ONLY</b> special price for 6 extra Clarifion for only <b className='code'>$14 each</b> ($84.00 total!) </p>
        </div>
        <div className='frame13'>
          <div className='frameimg'>
            <img className='imgboxproduct' src={productrue} alt='selected product' />
          </div>
          <div className='diffecontent'>
            <div className='line-price'>
                <div className='line-price2'>
                  <h2 className='nameprod'>Clarifion Air Ionizer</h2>
                </div>
                <div className='line-price3'>
                  <p className='pricefix'>$180</p>
                  <p className='pricefix2'>$84</p>
                </div>
            </div>
            <div className='starsprod'>
                <svg className='starsprod2' width="19" color='gold' height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                <svg className='starsprod2' width="19" color='gold' height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                <svg className='starsprod2' width="19" color='gold' height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                <svg className='starsprod2' width="19" color='gold' height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
                <svg className='starsprod2' width="19" color='gold' height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path></svg>
            </div>
            <div className='frame193'>
                <img className='indipro' src={stock} alt='selected product' />
                <p className='indipro2'>12 left in Stock</p>
            </div>
            <p className='pulpi'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
          </div>
        </div>
          <div className='frame472'>
              <div className='chul1'>
                  <img className='pic1' src={chulo} alt='frtchulo' />
                  <p className='frase'>Negative Ion Technology may <b>help with allergens</b></p>
              </div>
              <div className='chul2'>
                  <img className='pic1' src={chulo} alt='frtchulo2' />
                  <p className='frase'>Designed for <b>air rejuvenation</b></p>
              </div>
              <div className='chul3'>
                  <img className='pic1' src={chulo} alt='frtchulo3' />
                  <p className='frase'><b>Perfect for every room</b> in all types of places.</p>
              </div>
          </div>
          <div className='containertv'>
            <div className='containertv2'>
              <img className='imgtv' src={percentage} alt='porcentage' />
                              <Text>
                  Save{' '}
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <Link href="https://clarifion.com/products/clarifionionizer" target="_blank"><b className='blue'>
                        53%
                      </b>
                      </Link>
                    </HoverCard.Trigger>
                    <HoverCard.Content>
                      <Flex gap="4">
                        <Avatar
                          size="3"
                          fallback="R"
                          radius="full"
                          src={percentage}
                        />
                        <Box>
                          <Heading size="3" as="h3">
                            Clarifion
                          </Heading>
                          <Text as="div" size="2" color="gray">
                            Discounts
                          </Text>
                          <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                            Here today you will find plenty of giving away items.
                          </Text>
                        </Box>
                      </Flex>
                    </HoverCard.Content>
                  </HoverCard.Root>{' '}
                  and get <b className='blue'>6 extra Clarifision</b> for only <b className='blue'>$14 Each.</b>
                </Text>
            </div>
          </div>
          <div className='btnmainbox'>
              <div className='boxsecound'>
                  <div className='btnclaim'>
                      <button className='bbtn'onClick={() => setModalOpen(true)}>
                        <div className='btnsito'>
                          <p className='btnsito2'>YES - CLAIM MY DISCOUNT</p>
                          <img className='arrowicon' src={arrowsito} alt='arrow' />
                        </div>
                      </button> 
                      <Modal open={modalOpen} onClose={handleModalClose} onAccept={handleAccept} />
                  </div>
                  <div className='bannerbox'>
                      <div className='shippingopt'>
                        <p className='shipping'>Free shipping</p>
                      </div>
                          <img className='barrier' src={line} alt='split simbol' />
                      <div className='contepadlock'>
                        <img className='padlock' src={padlock} alt='padlock' />
                        <p className='secure'>Secure 256-bit SSL encryption.</p>
                      </div>
                          <img className='barrier' src={line} alt='split simbol' />
                      <div className='conteimgs'>
                        <img className='cards' src={card1} alt='card' />
                        <img className='cards' src={card2} alt='card' />
                        <img className='cards' src={card3} alt='card' />
                        <img className='cards' src={card4} alt='card' />
                        <img className='cards' src={card5} alt='card' />
                        <img className='cards' src={card6} alt='card' />
                        <img className='cards' src={card7} alt='card' />
                      </div>
                  </div>
                  <div className='nothnks'>
                    <p className='nothanks'>NO THANKS, I DON’T WANT THIS.</p>
                  </div>
              </div> 
          </div>
          <div className='guarantee'>
            <img className='refund' src={refound} alt='refund-symbol' />
            <p className='refundtext'>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
          </div>
    </div>
  )
}

export default DecorativeBoxtwo