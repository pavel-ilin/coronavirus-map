namespace :seed_task do
  desc "SEED"
  task :seed => :environment do
    Rails.application.load_seed
  end
end

