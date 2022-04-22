#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1
[ -z "$OWNER" ] || echo "Found it! \$OWNER is set to [ $OWNER ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: We need to fill up our vector with the cities"
echo
echo ---------------------------------------------------------
echo

near call $CONTRACT fillVector --accountId $OWNER

echo
echo

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Let's get our plate number."
echo
echo ---------------------------------------------------------
echo

near call $CONTRACT randomPlateNumber --accountId $OWNER

echo
echo
echo ---------------------------------------------------------
echo "You can make your guess now"
echo "near call \$CONTRACT guessThePlate '{\"answer\" : \"YOUR ANSWER HERE\"}' --accountId \$OWNER"
echo ---------------------------------------------------------
echo


exit 0