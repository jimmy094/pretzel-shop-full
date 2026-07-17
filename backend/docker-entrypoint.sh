#!/bin/sh
set -e

echo "Running database migrations...hell yeahhhhh"
node scripts/migrate.js

echo "Starting server...wooohooooo"
exec node server.js
