<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="card">
          <div class="row no-gutters align-items-center">
            <div class="col-md-4 text-center">
              <img :src="$auth.user.picture" class="img-fluid rounded-circle mt-3 mb-3" alt="profile picture" style="width: 180px; height: 180px; object-fit: cover;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">{{ $auth.user.name }}</h4>
                <p class="card-text"><strong>Email:</strong> {{ $auth.user.email }}</p>
                <p class="card-text"><strong>Nickname:</strong> {{ $auth.user.nickname }}</p>
                <p class="card-text"><strong>Locale:</strong> {{ $auth.user.locale }}</p>
                <p class="card-text"><strong>Last Updated:</strong> {{ new Date($auth.user.updated_at).toLocaleString() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="card">
          <div class="card-header font-weight-bold">User Details</div>
          <div class="card-body">
            <pre class="user-json">{{ JSON.stringify($auth.user, null, 2) }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-json {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  padding: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.img-fluid {
  box-shadow: 0 0 8px rgba(0,0,0,0.15);
}
</style>
