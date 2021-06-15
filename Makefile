default: install

h help:
	@egrep '^\S|^$$' Makefile

install:
	bundle config set --local path vendor/bundle
	bundle install

s serve:
	bundle exec jekyll liveserve 

build:
	JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build --trace