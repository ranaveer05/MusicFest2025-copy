#!/bin/bash

read -p "Enter your score (0-100): " score


if ! [[ $score =~ ^[0-9]+$ ]]; then
    echo "Error: Input must be a number."
    exit 1
fi


if [ $score -lt 0 ] || [ $score -gt 100 ]; then
    echo "Error: Score must be between 0 and 100."
    exit 1
fi


if [ $score -ge 70 ]; then
    echo "Grade A - Excellent! You passed with distinction."
elif [ $score -ge 60 ]; then
    echo "Grade B - Very Good! You passed with merit."
elif [ $score -ge 50 ]; then
    echo "Grade C - Good! You passed."
elif [ $score -ge 40 ]; then
    echo "Grade D - Satisfactory! You passed."
else
    echo "Grade F - Unfortunately, you did not pass."
fi