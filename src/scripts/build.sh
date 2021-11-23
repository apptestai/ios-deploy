#!/bin/sh
xcodebuild -scheme ios-deploy -derivedDataPath "./build"  DEVELOPMENT_TEAM=$1 CODE_SIGN_IDENTITY=$2
