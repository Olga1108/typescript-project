import React, { KeyboardEvent, useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import StarIcon from './Star.svg';
import cn from 'classnames';

export const Rating = ({ isEditable = false, setRating, rating, children, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    key={i}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    tabIndex={isEditable ? 0 : -1}
                    onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                />
            )
        });
        setRatingArray(updateArray)
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }

    return (
        <div
            {...props}
        >
            {ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    )
}