#!/bin/bash

cd ui
npm run pretty
cd ..
cd frontend
npm run pretty
cd ..
cd ui
npm run lint
cd ..
cd frontend
npm run lint