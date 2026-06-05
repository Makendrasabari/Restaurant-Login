/**
 * Restaurant Management - Dashboard Module
 * Charts, Tables, Counters, Mock Data
 */

const Dashboard = (() => {
  let charts = {};

  const chartColors = {
    primary: '#6366F1',
    secondary: '#06B6D4',
    accent: '#A855F7',
    success: '#10B981',
    info: '#3B82F6',
    purple: '#8B5CF6',
    cream: '#F4F7FE',
    grid: 'rgba(0,0,0,0.06)'
  };

  const getThemeColors = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
      text: isDark ? '#E8E8E8' : '#1A1A1A',
      grid: isDark ? 'rgba(255,255,255,0.08)' : chartColors.grid,
      bg: isDark ? '#2D2D2D' : '#FFFFFF'
    };
  };

  const defaultChartOptions = () => {
    const theme = getThemeColors();
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: theme.text, font: { family: 'Poppins', size: 12 } }
        }
      },
      scales: {
        x: {
          grid: { color: theme.grid },
          ticks: { color: theme.text, font: { family: 'Poppins', size: 11 } }
        },
        y: {
          grid: { color: theme.grid },
          ticks: { color: theme.text, font: { family: 'Poppins', size: 11 } }
        }
      }
    };
  };

  const initAdminCharts = () => {
    destroyCharts();

    // ── Dashboard Overview Charts ──
    const dashLineCtx = document.getElementById('dashOrdersChart');
    if (dashLineCtx) {
      charts.dashOrders = new Chart(dashLineCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Daily Orders',
            data: [42, 58, 45, 72, 89, 95, 78],
            borderColor: chartColors.primary,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: chartColors.primary,
            pointRadius: 5
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const dashDoughnutCtx = document.getElementById('dashCategoriesChart');
    if (dashDoughnutCtx) {
      charts.dashCategories = new Chart(dashDoughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Pizza', 'Burgers', 'Pasta', 'Salads', 'Desserts'],
          datasets: [{
            data: [28, 22, 18, 15, 17],
            backgroundColor: [
              chartColors.primary,
              chartColors.secondary,
              chartColors.accent,
              chartColors.success,
              chartColors.purple
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: getThemeColors().text, padding: 16, font: { family: 'Poppins' } }
            }
          }
        }
      });
    }

    const dashRevenueCtx = document.getElementById('dashRevenueChart');
    if (dashRevenueCtx) {
      charts.dashRevenue = new Chart(dashRevenueCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue ($)',
            data: [12500, 15800, 14200, 18900, 22100, 24500],
            backgroundColor: [
              'rgba(99, 102, 241, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(99, 102, 241, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(168, 85, 247, 0.8)'
            ],
            borderRadius: 8
          }]
        },
        options: defaultChartOptions()
      });
    }

    const dashSalesCtx = document.getElementById('dashSalesChart');
    if (dashSalesCtx) {
      charts.dashSales = new Chart(dashSalesCtx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Dine-in',
              data: [4200, 5100, 4800, 5600],
              backgroundColor: 'rgba(99, 102, 241, 0.7)',
              borderRadius: 6
            },
            {
              label: 'Delivery',
              data: [6800, 7200, 8100, 8900],
              backgroundColor: 'rgba(6, 182, 212, 0.7)',
              borderRadius: 6
            }
          ]
        },
        options: defaultChartOptions()
      });
    }

    // ── Analytics Section Charts ──
    const lineCtx = document.getElementById('adminOrdersChart');
    if (lineCtx) {
      charts.orders = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Daily Orders',
            data: [42, 58, 45, 72, 89, 95, 78],
            borderColor: chartColors.primary,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: chartColors.primary,
            pointRadius: 5
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const barCtx = document.getElementById('adminRevenueChart');
    if (barCtx) {
      charts.revenue = new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue ($)',
            data: [12500, 15800, 14200, 18900, 22100, 24500],
            backgroundColor: [
              'rgba(99, 102, 241, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(99, 102, 241, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(168, 85, 247, 0.8)'
            ],
            borderRadius: 8
          }]
        },
        options: defaultChartOptions()
      });
    }

    const doughnutCtx = document.getElementById('adminCategoriesChart');
    if (doughnutCtx) {
      charts.categories = new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Pizza', 'Burgers', 'Pasta', 'Salads', 'Desserts'],
          datasets: [{
            data: [28, 22, 18, 15, 17],
            backgroundColor: [
              chartColors.primary,
              chartColors.secondary,
              chartColors.accent,
              chartColors.success,
              chartColors.purple
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: getThemeColors().text, padding: 16, font: { family: 'Poppins' } }
            }
          }
        }
      });
    }

    const reservationCtx = document.getElementById('adminReservationsChart');
    if (reservationCtx) {
      charts.reservations = new Chart(reservationCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Reservations',
            data: [32, 45, 38, 52],
            borderColor: chartColors.success,
            backgroundColor: 'rgba(46, 204, 113, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const salesCtx = document.getElementById('adminSalesChart');
    if (salesCtx) {
      charts.sales = new Chart(salesCtx, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            {
              label: 'Dine-in',
              data: [4200, 5100, 4800, 5600],
              backgroundColor: 'rgba(99, 102, 241, 0.7)',
              borderRadius: 6
            },
            {
              label: 'Delivery',
              data: [6800, 7200, 8100, 8900],
              backgroundColor: 'rgba(6, 182, 212, 0.7)',
              borderRadius: 6
            }
          ]
        },
        options: defaultChartOptions()
      });
    }

    // ── Reports Section Charts ──
    const revTrend2Ctx = document.getElementById('adminRevenueChart2');
    if (revTrend2Ctx) {
      charts.revenueTrend2 = new Chart(revTrend2Ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue ($)',
            data: [12500, 15800, 14200, 18900, 22100, 24500],
            borderColor: chartColors.primary,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: chartColors.primary,
            pointRadius: 5
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const salesChan2Ctx = document.getElementById('adminSalesChart2');
    if (salesChan2Ctx) {
      charts.salesChannel2 = new Chart(salesChan2Ctx, {
        type: 'bar',
        data: {
          labels: ['Dine-in', 'Delivery', 'Takeaway', 'Catering'],
          datasets: [{
            label: 'Revenue ($)',
            data: [9800, 12400, 5200, 3100],
            backgroundColor: [
              'rgba(99, 102, 241, 0.8)',
              'rgba(6, 182, 212, 0.8)',
              'rgba(168, 85, 247, 0.8)',
              'rgba(16, 185, 129, 0.8)'
            ],
            borderRadius: 8
          }]
        },
        options: defaultChartOptions()
      });
    }

    const custSegCtx = document.getElementById('adminCustomerChart');
    if (custSegCtx) {
      charts.customerSegments = new Chart(custSegCtx, {
        type: 'doughnut',
        data: {
          labels: ['New', 'Regular', 'VIP', 'Inactive'],
          datasets: [{
            data: [124, 452, 86, 194],
            backgroundColor: [
              chartColors.primary,
              chartColors.secondary,
              chartColors.accent,
              chartColors.info
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: getThemeColors().text, padding: 16, font: { family: 'Poppins' } }
            }
          }
        }
      });
    }

    animateChartCards();
  };

  const initCustomerCharts = () => {
    destroyCharts();

    const orderCtx = document.getElementById('customerOrdersChart');
    if (orderCtx) {
      charts.orderHistory = new Chart(orderCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Orders',
            data: [3, 5, 4, 8, 6, 9],
            borderColor: chartColors.primary,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const spendingCtx = document.getElementById('customerSpendingChart');
    if (spendingCtx) {
      charts.spending = new Chart(spendingCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Spending ($)',
            data: [85, 120, 95, 180, 145, 210],
            backgroundColor: 'rgba(168, 85, 247, 0.75)',
            borderRadius: 8
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const favCtx = document.getElementById('customerFavChart');
    if (favCtx) {
      charts.favorites = new Chart(favCtx, {
        type: 'doughnut',
        data: {
          labels: ['Italian', 'American', 'Asian', 'Mexican'],
          datasets: [{
            data: [35, 25, 22, 18],
            backgroundColor: [chartColors.primary, chartColors.secondary, chartColors.info, chartColors.success],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: { legend: { position: 'bottom', labels: { color: getThemeColors().text } } }
        }
      });
    }

    const activityCtx = document.getElementById('customerActivityChart');
    if (activityCtx) {
      charts.activity = new Chart(activityCtx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Dining Activity',
            data: [0, 1, 0, 1, 2, 1, 0],
            borderColor: chartColors.purple,
            backgroundColor: 'rgba(155, 89, 182, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: { ...defaultChartOptions(), plugins: { legend: { display: false } } }
      });
    }

    const loyaltyCtx = document.getElementById('customerLoyaltyChart');
    if (loyaltyCtx) {
      charts.loyalty = new Chart(loyaltyCtx, {
        type: 'bar',
        data: {
          labels: ['Bronze', 'Silver', 'Gold', 'Platinum'],
          datasets: [{
            label: 'Points Progress',
            data: [100, 250, 400, 750],
            backgroundColor: [
              'rgba(205, 127, 50, 0.7)',
              'rgba(192, 192, 192, 0.7)',
              'rgba(255, 215, 0, 0.7)',
              'rgba(168, 85, 247, 0.7)'
            ],
            borderRadius: 8
          }]
        },
        options: defaultChartOptions()
      });
    }

    animateChartCards();
  };

  const destroyCharts = () => {
    Object.values(charts).forEach((c) => c?.destroy());
    charts = {};
  };

  const refreshCharts = () => {
    const isAdmin = document.body.classList.contains('admin-dashboard');
    if (isAdmin) initAdminCharts();
    else initCustomerCharts();
  };

  const resizeCharts = () => {
    Object.values(charts).forEach((c) => c?.resize());
  };

  const animateChartCards = () => {
    if (typeof gsap === 'undefined') return;
    gsap.from('.chart-card canvas', {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.5
    });
  };

  const initCounters = (stats) => {
    document.querySelectorAll('[data-counter]').forEach((el) => {
      const key = el.dataset.counter;
      const value = stats[key] ?? parseFloat(el.dataset.value) ?? 0;
      animateCounter(el, value, parseFloat(el.dataset.duration) || 2);
    });
  };

  const initTables = () => {
    document.querySelectorAll('.data-table-wrapper').forEach((wrapper) => {
      const table = wrapper.querySelector('table');
      const searchInput = wrapper.querySelector('.table-search');
      const tbody = table?.querySelector('tbody');
      const rows = tbody ? Array.from(tbody.querySelectorAll('tr')) : [];
      let sortCol = -1;
      let sortAsc = true;
      let currentPage = 1;
      const perPage = parseInt(wrapper.dataset.perPage) || 5;

      const render = () => {
        const query = (searchInput?.value || '').toLowerCase();
        let filtered = rows.filter((row) =>
          row.textContent.toLowerCase().includes(query)
        );

        if (sortCol >= 0) {
          filtered.sort((a, b) => {
            const aVal = a.cells[sortCol]?.textContent.trim() || '';
            const bVal = b.cells[sortCol]?.textContent.trim() || '';
            const aNum = parseFloat(aVal.replace(/[^0-9.-]/g, ''));
            const bNum = parseFloat(bVal.replace(/[^0-9.-]/g, ''));
            if (!isNaN(aNum) && !isNaN(bNum)) {
              return sortAsc ? aNum - bNum : bNum - aNum;
            }
            return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
          });
        }

        const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
        if (currentPage > totalPages) currentPage = totalPages;

        rows.forEach((r) => (r.style.display = 'none'));
        const start = (currentPage - 1) * perPage;
        filtered.slice(start, start + perPage).forEach((r) => (r.style.display = ''));

        const pagination = wrapper.querySelector('.table-pagination');
        if (pagination) {
          pagination.innerHTML = '';
          for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
            btn.textContent = i;
            btn.addEventListener('click', () => {
              currentPage = i;
              render();
            });
            pagination.appendChild(btn);
          }
        }
      };

      searchInput?.addEventListener('input', () => {
        currentPage = 1;
        render();
      });

      table?.querySelectorAll('th[data-sort]').forEach((th) => {
        th.style.cursor = 'pointer';
        th.addEventListener('click', () => {
          const idx = th.cellIndex;
          if (sortCol === idx) sortAsc = !sortAsc;
          else {
            sortCol = idx;
            sortAsc = true;
          }
          table.querySelectorAll('th').forEach((h) => h.classList.remove('sort-asc', 'sort-desc'));
          th.classList.add(sortAsc ? 'sort-asc' : 'sort-desc');
          render();
        });
      });

      render();
    });
  };

  const populateUserInfo = (session) => {
    if (!session) return;
    document.querySelectorAll('[data-user-name]').forEach((el) => {
      el.textContent = session.fullName;
    });
    document.querySelectorAll('[data-user-email]').forEach((el) => {
      el.textContent = session.email;
    });
    document.querySelectorAll('[data-user-role]').forEach((el) => {
      el.textContent = session.role.charAt(0).toUpperCase() + session.role.slice(1);
    });
    const avatar = document.querySelector('.user-avatar');
    if (avatar) {
      avatar.textContent = session.fullName.charAt(0).toUpperCase();
      avatar.setAttribute('title', session.fullName);
    }
  };

  const adminStats = {
    totalOrders: 1248,
    totalCustomers: 856,
    menuItems: 142,
    monthlyRevenue: 24500,
    activeReservations: 34
  };

  const customerStats = {
    ordersPlaced: 35,
    rewardPoints: 1250,
    reservations: 8,
    favoriteItems: 12,
    couponsAvailable: 5
  };

  const initAdmin = (session) => {
    populateUserInfo(session);
    initCounters(adminStats);
    initAdminCharts();
    initTables();
    animateDashboardEntrance();
  };

  const initCustomer = (session) => {
    populateUserInfo(session);
    initCounters(customerStats);
    initCustomerCharts();
    initTables();
    animateDashboardEntrance();
  };

  return {
    initAdmin,
    initCustomer,
    refreshCharts,
    resizeCharts,
    adminStats,
    customerStats
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('admin-dashboard')) {
    const session = Auth.protectRoute('admin');
    if (session) Dashboard.initAdmin(session);
  } else if (document.body.classList.contains('customer-dashboard')) {
    const session = Auth.protectRoute('customer');
    if (session) Dashboard.initCustomer(session);
  }
});
