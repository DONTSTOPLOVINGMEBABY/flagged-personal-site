starting_path=$(dirname $0)
site_directory="$starting_path/site"
source_code_dir="./DONTSTOPLOVINGMEBABY.github.io"

# Load env vars
source "$starting_path/.env"

if [[ -z $RAILWAY_TOKEN ]]; then 
    echo "Failed to provide railway token for upload"
fi

# Pull source code if not already in repo
if ! test -d $source_code_dir; then 
    bash pull-personal-site.sh pull-env
fi

# Build static assets and copy them to the site directory
cd "$starting_path/DONTSTOPLOVINGMEBABY.github.io"
npx vite build && cp -R dist/* ../site && npx rimraf dist

# Publish with railway to service "site"
cd ../
RAILWAY_TOKEN=$RAILWAY_TOKEN npx railway up --service site