import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card link="https://source.unsplash.com/400x250?nature"cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear"/>
           <Card link="https://source.unsplash.com/400x250?programming" cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple"/>
           <Card link="https://source.unsplash.com/random/400x250?boy" cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}
export default CardSection