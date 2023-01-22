.PHONY: importdb

importdb:
	docker compose exec database \
	mongorestore -d app -c product /import-data/dump/off/products.bson \
	--username root --password root --authenticationDatabase admin
