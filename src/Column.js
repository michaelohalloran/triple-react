import React from 'react';
import './Column.css';

class Column extends React.Component {

    state = {
        cards: this.props.cards
    }

    addCard = () => {
        const text = window.prompt('What text do you want to add?');
        this.setState((prevState)=> {
            return {
                cards: [...prevState.cards, {text}]
            }
        })
    }

    moveDirection = e => {
        console.log('e target: ', e.target.parentElement);
        let comment = e.target.parentElement;
        let pText = comment.children[1].innerHTML;
        // console.log('children: ', e.target.parentElement.parentElement.parentElement.children);
        console.log('comment children: ', comment.children[1].innerHTML);
        let cards = this.state.cards.slice();
        let updatedCards = cards.filter(card => card.text !== pText);


        if(e.target.value === '<') {
            //move to col on the left
            this.setState({
                cards: updatedCards
            });
        } 
        //else if (e.target.value === '>') {
        //     //move right
        // }
    }


    render() {
        const {style, name, cards} = this.props;
        console.log('style: ', style);

        const cardDisplay = cards.map(card => {
            return (
                <div key={card.id}>
                    <button value={'<'} onClick={this.moveDirection}>{'<'}</button>
                    <p value={card.text}>{card.text}</p>
                    <button value={'>'} onClick={this.moveDirection}>{'>'}</button>
                </div>
                
            );
        })
        return (
            <div className="col-individual">
              <h2 style={style}>{name}</h2>
              {cardDisplay}
              <button onClick={this.addCard}>Add text</button>
            </div>
          )
    }
}

export default Column;
