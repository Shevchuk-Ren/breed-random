import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Card, CardList } from 'components';
import { getDogsByBreed, getRandomDog } from 'services';
import { CommonWrapper } from 'styles';
import { StyledWrapper } from './styles';
export const HomePage = () => {

  const [dogList, setDogList] = useState<string[]>([]);
  const [randomDog, setRandomDog] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
 
    useEffect(  () => {
      getRandomDog().then((response) => {
          const replacePartBefore = response.data.message.replace(/^(([^\/]*\/){4,4}).*/,'$1').length;
          const replacePartAfter = response.data.message.replace(/^(([^\/]*\/){5,5}).*/,'$1').length;
          const resultUrl = response.data.message.substring(replacePartBefore, replacePartAfter)
         setBreed(resultUrl);
         setRandomDog(response?.data?.message)
      } ).catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
    }, [])

    useEffect(()=> {
      if(breed.length > 0) {
         getDogsByBreed(breed, 10).then((response) => {
        setDogList(response.data.message);
      }).catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      }
    }, [breed])

  
    return (
      <>
      <CommonWrapper>
        <StyledWrapper>
          <Card height={520}  data={randomDog}></Card>
        </StyledWrapper>
      <CardList title={breed.toUpperCase()} rows={dogList} height={420}/>
      </CommonWrapper>
      </>
    );
  };
  