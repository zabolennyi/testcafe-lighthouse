#!/bin/sh
aws s3 sync report/ s3://performance-test-results/lighthouse/ --delete --no-progress
